import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CarService } from '../../services/car.service';
import { CarCardComponent } from '../car-card/car-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Car } from 'app/car.model';
import { LoaderComponent } from '../loader/loader.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    CarCardComponent,
    SearchFilterComponent,
    MatPaginatorModule,
    LoaderComponent,
  ],
})
export class HomepageComponent implements OnInit {
  cars: WritableSignal<Car[]> = signal<Car[]>([]);
  totalCars: WritableSignal<number> = signal<number>(0);
  page: WritableSignal<number> = signal<number>(0);
  pageSize: WritableSignal<number> = signal<number>(10);
  searchTerm: WritableSignal<string> = signal<string>('');
  filters: WritableSignal<any> = signal<any>({});
  isLoading: WritableSignal<boolean> = signal<boolean>(true);

  private searchTermSubject = new Subject<string>();

  constructor(private carService: CarService) {
    this.searchTermSubject.pipe(debounceTime(300)).subscribe(term => {
      this.searchTerm.set(term);
      this.loadCars();
    });
  }

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.isLoading.set(true);
    const filters = { searchTerm: this.searchTerm(), ...this.filters() };
    this.carService.getCars(filters, this.page(), this.pageSize()).subscribe({
      next: (response) => {
        if (response && response.payload) {
          this.cars.set(response.payload);
          this.totalCars.set(response.total || 0);
        } else {
          this.cars.set([]);
          this.totalCars.set(0);
        }
      },
      error: (err) => {
        console.error('Failed to load cars:', err);
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  onSearchTermChanged(newTerm: string) {
    this.searchTermSubject.next(newTerm);  // Emit the new search term with debounce
  }

  onPageChange(event: PageEvent) {
    this.page.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadCars();
  }
}
