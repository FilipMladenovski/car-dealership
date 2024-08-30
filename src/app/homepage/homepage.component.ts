import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CarService } from '../../services/car.service';
import { CarCardComponent } from '../car-card/car-card.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Car } from 'app/car.model';
import { LoaderComponent } from '../loader/loader.component';

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
  filters: WritableSignal<any> = signal<any>({});
  isLoading: WritableSignal<boolean> = signal<boolean>(true);

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.isLoading.set(true);
    this.carService.getCars(this.filters(), this.page(), this.pageSize()).subscribe({
      next: (response) => {
        if (response && response.payload) {
          this.cars.set(response.payload);
          this.totalCars.set(response.total || 0);
        } else {
          this.cars.set([]);
          this.totalCars.set(0);
        }
      },
      error: () => {
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  onFiltersChanged(filters: any) {
    this.filters.set(filters);
    this.page.set(0);
    this.loadCars();
  }

  onPageChange(event: PageEvent) {
    this.page.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadCars();
  }
}
