import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class CarCardComponent {
  @Input() car!: Car;

  constructor(private router: Router) {}

  viewCarDetails(): void {
    this.router.navigate(['/cars', this.car.id]);
  }

  getImageUrl(imagePath: string): string {
    return imagePath;
  }
}
