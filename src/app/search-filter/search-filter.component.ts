import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatFormFieldModule, MatInputModule]
})
export class SearchFilterComponent {
  years: number[] = [];
  fuelTypes: string[] = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  types: string[] = ['Sedan', 'SUV', 'Coupe', 'Hatchback', 'Convertible'];

  filters = {
    searchTerm: '',
    brand: '',
    model: '',
    type: '',
    minYear: null,
    maxDistance: null,
    minEnginePower: null,
    transmission: '',
    fuelType: '',
    isNew: null
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
