import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StarshipComponent } from './pages/starships/starship.component';
import { StarshipDetailsComponent } from './pages/starship-details/starship-details.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'starships', component: StarshipComponent},
  {path: 'starships/:id', component: StarshipDetailsComponent}
];
