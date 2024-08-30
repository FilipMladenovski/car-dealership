import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: '**', redirectTo: 'home' },
];
