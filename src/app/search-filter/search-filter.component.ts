import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class SearchFilterComponent {
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

  onFilterChange() {
    this.filtersChanged.emit(this.filters);
  }
}
