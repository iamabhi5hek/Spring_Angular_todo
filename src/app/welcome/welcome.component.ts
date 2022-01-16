//package name

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  name = ''

  //public ab(){}
  //injecting name dependency
  //activated route
  constructor(private route : ActivatedRoute) { }

  //void method
  ngOnInit(): void {
    // this.message = 5
    console.log(this.message) 
    this.name = this.route.snapshot.params['name'];
  }

}

// export class class1{}
