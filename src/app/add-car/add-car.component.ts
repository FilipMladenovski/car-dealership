import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
})
export class AddCarComponent {
  carForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      brand: [''],
      model: [''],
      type: [''],
      year: [''],
      color: [''],
      fuelType: [''],
      distance: [''],
      enginePower: [''],
      transmission: [''],
      price: [''],
      images: [''],
      location: this.fb.group({
        city: [''],
        country: ['']
      }),
      doors: [''],
      seats: [''],
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      console.log('Car form data:', this.carForm.value);
    }
  }
}
