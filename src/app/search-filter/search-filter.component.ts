import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent {
  @Input() filters: any = {};
  @Output() filtersChanged = new EventEmitter<any>();

  updateFilter(field: string, value: string | number): void {
    this.filters[field] = value;
    this.filtersChanged.emit(this.filters);
  }

  updateSelectFilter(field: string, event: any): void {
    this.filters[field] = event.value;
    this.filtersChanged.emit(this.filters);
  }
}
