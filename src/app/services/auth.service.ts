import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/auth.interface';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _httpClient = inject(HttpClient);
  private baseURL = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  checkRegister(email:string):Observable<User[]> {
    return this._httpClient.get<User[]>(`${this.baseURL}/users?email=${email}`);

  }

  registerUser(userDetails: User):Observable<User> {
    return this._httpClient.post<User>(`${this.baseURL}/users`, userDetails, this.httpOptions);
  }

  loginUser(email:string, password:string):Observable<any> {
    return this._httpClient.post<any>(`${this.baseURL}/login`, {email,password}, this.httpOptions);
  }

  






}





