import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StarshipComponent } from './pages/starships/starship.component';
import { StarshipDetailsComponent } from './pages/starship-details/starship-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'starships', component: StarshipComponent},
  {path: 'starships/:id', component: StarshipDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];
