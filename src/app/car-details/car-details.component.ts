import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Car } from 'app/car.model';
import { CarService } from 'services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class CarDetailsComponent implements OnInit {
  car: Car | null = null;

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    if (carId) {
      this.carService.getCarById(carId).subscribe((car) => {
        this.car = car;
      });
    }
  }

  getImageUrl(imagePath: string): string {
    return imagePath;
  }

  goBackToHome(): void {
    this.router.navigate(['/home']);
  }
}
