import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, share, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class apiService {

  private baseURL:string = 'https://swapi.py4e.com/api/';
  private _httpClient = inject(HttpClient)

  getStarships(apiUrl:string = `${this.baseURL}starships`):Observable<any> {
    if(apiUrl === null){
      return of()
    }
    return this._httpClient.get(apiUrl).pipe(share())
  }



}
