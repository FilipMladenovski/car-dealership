import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CarCardComponent } from '../car-card/car-card.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { Car } from '../car.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, CarCardComponent, SearchFilterComponent]
})
export class HomepageComponent {
  cars: Car[] = [
      {
        id: '1',
        description: 'Like new, used by the owner',
        price: 100000,
        images: ['car1.jpg'],
        type: 'Sedan',
        year: 2022,
        color: 'Blue',
        fuelType: 'Petrol',
        distance: 15000,
        isNew: false,
        location: { city: 'Skopje', country: 'Macedonia' },
        brand: 'BMW',
        model: 'X5',
        enginePower: 200,
        doors: 4,
        seats: 5,
        transmission: 'Automatic'
      },
      {
        id: '2',
        description: 'Brand new with full warranty',
        price: 45000,
        images: ['car2.jpg'],
        type: 'SUV',
        year: 2024,
        color: 'White',
        fuelType: 'Diesel',
        distance: 0,
        isNew: true,
        location: { city: 'Belgrade', country: 'Serbia' },
        brand: 'Audi',
        model: 'Q7',
        enginePower: 250,
        doors: 5,
        seats: 7,
        transmission: 'Automatic'
      },
      {
        id: '3',
        description: 'Well-maintained, perfect for long drives',
        price: 32000,
        images: ['car3.jpg'],
        type: 'Hatchback',
        year: 2021,
        color: 'Blue',
        fuelType: 'Petrol',
        distance: 30000,
        isNew: false,
        location: { city: 'Zagreb', country: 'Croatia' },
        brand: 'Ford',
        model: 'Focus',
        enginePower: 180,
        doors: 4,
        seats: 5,
        transmission: 'Manual'
      },
      {
        id: '4',
        description: 'Luxury convertible, excellent condition',
        price: 65000,
        images: ['car4.jpg'],
        type: 'Convertible',
        year: 2023,
        color: 'Red',
        fuelType: 'Petrol',
        distance: 5000,
        isNew: false,
        location: { city: 'Ljubljana', country: 'Slovenia' },
        brand: 'Mercedes-Benz',
        model: 'SL-Class',
        enginePower: 300,
        doors: 2,
        seats: 2,
        transmission: 'Automatic'
      },
      {
        id: '5',
        description: 'Economical and reliable city car',
        price: 12000,
        images: ['car5.jpg'],
        type: 'Sedan',
        year: 2018,
        color: 'White',
        fuelType: 'Electric',
        distance: 20000,
        isNew: false,
        location: { city: 'Sofia', country: 'Bulgaria' },
        brand: 'Nissan',
        model: 'Leaf',
        enginePower: 110,
        doors: 4,
        seats: 5,
        transmission: 'Automatic'
      },
      {
        id: '6',
        description: 'Spacious and powerful family SUV',
        price: 52000,
        images: ['car6.jpg'],
        type: 'SUV',
        year: 2023,
        color: 'Green',
        fuelType: 'Petrol',
        distance: 8000,
        isNew: false,
        location: { city: 'Budapest', country: 'Hungary' },
        brand: 'Volkswagen',
        model: 'Tiguan',
        enginePower: 220,
        doors: 5,
        seats: 5,
        transmission: 'Automatic'
      },
      {
        id: '7',
        description: 'Sporty coupe with advanced features',
        price: 55000,
        images: ['car7.jpg'],
        type: 'Coupe',
        year: 2023,
        color: 'Green',
        fuelType: 'Petrol',
        distance: 10000,
        isNew: true,
        location: { city: 'Athens', country: 'Greece' },
        brand: 'Porsche',
        model: '911 Carrera',
        enginePower: 330,
        doors: 2,
        seats: 4,
        transmission: 'Automatic'
      },
      {
        id: '8',
        description: 'Classic Yugo with retro design, well-maintained',
        price: 5000,
        images: ['car8.jpg'],
        type: 'Hatchback',
        year: 1990,
        color: 'Red',
        fuelType: 'Petrol',
        distance: 80000,
        isNew: false,
        location: { city: 'Skopje', country: 'Macedonia' },
        brand: 'Yugo',
        model: 'Koral',
        enginePower: 55,
        doors: 3,
        seats: 4,
        transmission: 'Manual'
      },
      {
        id: '9',
        description: 'Luxury sedan with cutting-edge technology and safety features',
        price: 75000,
        images: ['car9.jpg'],
        type: 'Sedan',
        year: 2023,
        color: 'Red',
        fuelType: 'Electric',
        distance: 5000,
        isNew: true,
        location: { city: 'Vienna', country: 'Austria' },
        brand: 'Tesla',
        model: 'Model S',
        enginePower: 670,
        doors: 4,
        seats: 5,
        transmission: 'Automatic'
      },
      {
        id: '10',
        description: 'High-performance sports car with top-notch handling and acceleration',
        price: 150000,
        images: ['car10.jpg'],
        type: 'Coupe',
        year: 2024,
        color: 'Red',
        fuelType: 'Petrol',
        distance: 100,
        isNew: true,
        location: { city: 'Milan', country: 'Italy' },
        brand: 'Ferrari',
        model: '488 Pista',
        enginePower: 720,
        doors: 2,
        seats: 2,
        transmission: 'Automatic'
      },
      {
        id: '11',
        description: 'Classic compact car with a retro design and reliable performance',
        price: 12000,
        images: ['car11.jpg'],
        type: 'Hatchback',
        year: 1985,
        color: 'Yellow',
        fuelType: 'Petrol',
        distance: 150000,
        isNew: false,
        location: { city: 'Belgrade', country: 'Serbia' },
        brand: 'Zastava',
        model: '101',
        enginePower: 60,
        doors: 4,
        seats: 4,
        transmission: 'Manual'
      },    
      {
        id: '12',
        description: 'Elegant classic sedan with a vintage charm and smooth driving experience',
        price: 15000,
        images: ['car12.jpg'],
        type: 'Sedan',
        year: 1967,
        color: 'White',
        fuelType: 'Petrol',
        distance: 80000,
        isNew: false,
        location: { city: 'Rome', country: 'Italy' },
        brand: 'Fiat',
        model: '1300',
        enginePower: 75,
        doors: 4,
        seats: 5,
        transmission: 'Manual'
      }
  ];
  filteredCars: Car[] = [...this.cars];

  onFiltersChanged(filters: any) {
    this.filteredCars = this.cars.filter(car => this.applyFilters(car, filters));
  }

  applyFilters(car: Car, filters: any): boolean {
    return (!filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
           (!filters.model || car.model.toLowerCase().includes(filters.model.toLowerCase())) &&
           (!filters.year || car.year === filters.year) &&
           (!filters.color || car.color.toLowerCase().includes(filters.color.toLowerCase())) &&
           (!filters.fuelType || car.fuelType.toLowerCase().includes(filters.fuelType.toLowerCase())) &&
           (!filters.price || car.price <= filters.price) &&
           (!filters.distance || car.distance <= filters.distance) &&
           (!filters.transmission || car.transmission.toLowerCase().includes(filters.transmission.toLowerCase())) &&
           (!filters.type || car.type.toLowerCase().includes(filters.type.toLowerCase())) &&
           (!filters.locationCity || car.location.city.toLowerCase().includes(filters.locationCity.toLowerCase())) &&
           (!filters.locationCountry || car.location.country.toLowerCase().includes(filters.locationCountry.toLowerCase()));
  }
}
