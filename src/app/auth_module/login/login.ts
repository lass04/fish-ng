import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth-service';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  credentials = ["",""];

  constructor(private router:Router,private authSvc : AuthService){}
  ngOnInit(){
  }
  onSubmit(){
    this.authSvc.login(this.credentials[0],this.credentials[1]).subscribe(
      (isLoggedIn)=>{
        if(isLoggedIn) this.router.navigate(['/']);
        else this.router.navigate(['/auth']);
      }
    )
  }
}
