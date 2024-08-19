import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule]
})
export class SearchFilterComponent {
  years: number[] = [];
  fuelTypes: string[] = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  types: string[] = ['Sedan', 'SUV', 'Coupe', 'Hatchback', 'Convertible'];

  filters = {
    brand: '',
    model: '',
    year: null,
    color: '',
    fuelType: '',
    price: null,
    distance: null,
    transmission: '',
    type: '',
    locationCity: '',
    locationCountry: ''
  };

  @Output() filtersChanged = new EventEmitter<any>();

  constructor() {
    const currentYear = new Date().getFullYear();
    for (let year = 1990; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  onFilterChange() {
    this.filtersChanged.emit(this.filters);
  }
}
