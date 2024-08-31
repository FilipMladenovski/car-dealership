import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent {
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm = value; // Update the internal model
    this.searchTermChange.emit(value); // Emit to parent component
  }
}
