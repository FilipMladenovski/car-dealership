import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Car } from '../car.model'; // Ensure the correct path

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
})
export class CarCardComponent {
  @Input() car!: Car;

  getImageUrl(imagePath: string): string {
    return imagePath;
  }
}
