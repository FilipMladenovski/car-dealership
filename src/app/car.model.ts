export interface Car {
    id: string;
    description: string;
    price: number;
    images: string[];
    type: 'Sedan' | 'SUV' | 'Coupe' | 'Hatchback' | 'Convertible';
    year: number;
    color: string;
    fuelType: 'Petrol' | 'Diesel' | 'Electric';
    distance: number;
    isNew: boolean;
    location: {
      city: string;
      country: string;
    };
    brand: string;
    model: string;
    enginePower: number;
    doors: number;
    seats: number;
    transmission: string;
  }
  