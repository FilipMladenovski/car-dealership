import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
})
export class CarCardComponent {
  @Input() car: any;

  getImageUrl(imagePath: string): string {
    return `/images/${imagePath}`;
  }
}
