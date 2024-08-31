import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Car } from '../car.model';
import { CarService } from 'services/car.service';

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
    MatButtonModule,
  ],
})
export class AddCarComponent {
  carForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      description: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1886), Validators.max(new Date().getFullYear())]],
      color: [''],
      fuelType: ['', Validators.required],
      distance: ['', [Validators.required, Validators.min(0)]],
      enginePower: ['', [Validators.required, Validators.min(0)]],
      transmission: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      images: ['', Validators.required],
      location: this.fb.group({
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
      doors: ['', [Validators.required, Validators.min(1)]],
      seats: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      const carData: Car = this.carForm.value as Car;
      if (typeof carData.images === 'string') {
        carData.images = carData.images.split(',').map((url: string) => url.trim());
      }
      carData.isNew = carData.year === new Date().getFullYear();
      this.carService.addCar(carData).subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Error adding car:', error);
        }
      );
    } else {
      console.error('Form is invalid', this.carForm.errors);
      const formErrors = this.getFormValidationErrors();
      formErrors.forEach(error => console.error('Key: ' + error.key + ', Error: ' + JSON.stringify(error.errors)));
    }
  }

  private getFormValidationErrors() {
    const errors: any[] = [];
    Object.keys(this.carForm.controls).forEach(key => {
      const controlErrors = this.carForm.get(key)?.errors;
      if (controlErrors) {
        errors.push({
          key: key,
          errors: controlErrors
        });
      }
    });
    return errors;
  }
}
