import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from 'app/car.model';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CarCardComponent } from "../car-card/car-card.component";
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    SearchFilterComponent,
    MatPaginatorModule,
    CarCardComponent,
    LoaderComponent
],
})
export class HomepageComponent implements OnInit {
  cars: WritableSignal<Car[]> = signal<Car[]>([]);
  totalCars: WritableSignal<number> = signal<number>(0);
  page: WritableSignal<number> = signal<number>(0);
  pageSize: WritableSignal<number> = signal<number>(10);
  filters: WritableSignal<any> = signal<any>({
    searchTerm: '',
    brand: '',
    model: '',
    type: '',
    minYear: null,
    maxDistance: null,
    minEnginePower: null,
    transmission: '',
    fuelType: '',
  });
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
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load cars:', err);
        this.isLoading.set(false);
      },
    });
  }

  onFiltersChanged(updatedFilters: any) {
    this.filters.set(updatedFilters);
    this.page.set(0);
    this.loadCars();
  }

  onPageChange(event: PageEvent) {
    this.page.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadCars();
  }
}
