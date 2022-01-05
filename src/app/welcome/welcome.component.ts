//package name

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
//import { AppComponent } from '../app.component';

// @ComponentScane(value="package")
//java annotation ==> javascript decorators
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class ab implements interface
//public ==> export
export class WelcomeComponent implements OnInit {

  //string message
  message = 'welcome home'

  //public ab(){}
  constructor() { }

  //void method
  ngOnInit(): void {
    // this.message = 5
    console.log(this.message)
  }

}

// export class class1{}
