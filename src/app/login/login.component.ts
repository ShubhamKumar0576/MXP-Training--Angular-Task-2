import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string ='';

  constructor(private auth: AuthenticationService, private router: Router) { 
    if(this.auth.loggedIn){
      this.router.navigate(['product']);
    }
  }

  login(){
    if(this.username != '' && this.password !=''){
      if(this.auth.login(this.username, this.password)){
        this.router.navigate(['product']);
      } else{
        alert("Wrong Credentials");
      }
     } else{
        alert("Please enter username or password");

      }
    }
  

  ngOnInit(): void {
  }

}
