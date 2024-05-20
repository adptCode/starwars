import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  private _router = inject(Router);
  public storage = inject(StorageService);
  public auth = inject(AuthService);

  logOut() {
    this.storage.clean()
  }









}
