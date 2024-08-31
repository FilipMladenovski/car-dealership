export interface Car {
  id?: string;
  description: string;
  brand: string;
  model: string;
  type: 'Sedan' | 'SUV' | 'Coupe' | 'Hatchback' | 'Convertible' | 'Van' | 'Crossover' | 'Minivan';
  year: number;
  color: string;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  distance: number;
  enginePower: number;
  transmission: 'Manual' | 'Automatic' | 'Semi-Automatic';
  isNew: boolean;
  price: number;
  images: string[] | string;
  location: {
    city: string;
    country: string;
  };
  doors: number;
  seats: number;
}
