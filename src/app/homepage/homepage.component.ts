import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CarService } from '../../services/car.service';
import { Car } from '../car.model';
import { CarCardComponent } from '../car-card/car-card.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, CarCardComponent, SearchFilterComponent, MatPaginatorModule]
})
export class HomepageComponent implements OnInit {
  cars: WritableSignal<Car[]> = signal<Car[]>([]);
  totalCars: WritableSignal<number> = signal<number>(0);
  page: WritableSignal<number> = signal<number>(0);
  pageSize: WritableSignal<number> = signal<number>(10);
  filters: WritableSignal<any> = signal<any>({});

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    const params = { ...this.filters(), page: this.page(), pageSize: this.pageSize() };
    this.carService.getCars(params).subscribe(response => {
      if (response && response.payload) {
        this.cars.set(response.payload);
        this.totalCars.set(response.total || 0);
      } else {
        this.cars.set([]);
        this.totalCars.set(0);
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
