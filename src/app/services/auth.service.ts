import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUserId: string = null;
  constructor() {

   }
   isLoggedIn() {
    this.loggedInUserId = localStorage.getItem('loggedInUserId');
    if (this.loggedInUserId === 'null' || this.loggedInUserId === null || this.loggedInUserId === undefined) {
      return false;
    }
    return true;
   }
}
