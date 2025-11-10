import { Injectable } from '@angular/core';
import { delay,of,tap,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   isLoggedIn:boolean=false;

  login(username:string,password:string):Observable<boolean>{
    const isLoggedIn = (username=='Fish' && password=='Fish2025');
    return of(isLoggedIn).pipe(
      delay(1000),
      tap((isLoggedIn)=>this.isLoggedIn=isLoggedIn)
    );
  }

  logout(){
    this.isLoggedIn=false;
  }
}
