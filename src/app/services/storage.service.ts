import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean():void{
    localStorage.clear();
  }


  public saveUser(user: any): void {
    localStorage.removeItem('token');
    localStorage.setItem('token', JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem('token');
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  isLoggedIn():boolean {
    const user = localStorage.getItem('token');
    if(user) {
      return true
    } else {
      return false
    }
  }
}
