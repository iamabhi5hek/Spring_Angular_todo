import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'username'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //dependency injection of router
  //will be avaulable as member variable
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username)
    if(this.username === "username" && this.password === 'dummy'){
      //redirect to welcome page so need to use instance of router so will use dependecy injection
      //need to declare as constructor argument
      this.router.navigate(['welcome'])
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true;
    }
  }

}
