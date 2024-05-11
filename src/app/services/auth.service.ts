import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _httpClient = inject(HttpClient);
  private baseURL = 'http://localhost:3000'

  registerUser(userDetails: User) {
    return this._httpClient.post(`${this.baseURL}/users`, userDetails)
  }
}
