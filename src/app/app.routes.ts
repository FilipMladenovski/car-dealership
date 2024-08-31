import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AddCarComponent } from './add-car/add-car.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: '**', redirectTo: 'home' },
];
