//package name

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
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
  welcomeMessageFromService=''

  //public ab(){}
  //injecting name dependency
  //activated route
  constructor(private route : ActivatedRoute,
    private service : WelcomeDataService) { }

  //void method
  ngOnInit(): void {
    // this.message = 5
    console.log(this.message) 
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMesage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(  //async call , no response will be back 
      response => this.handleSuccessfulResponse(response),
      // response => console.log(response.message)
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMesageWithPathVariable(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(  //async call , no response will be back 
      response => this.handleSuccessfulResponse(response),
      // response => console.log(response.message)
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error :any){
    this.welcomeMessageFromService = error.error.message
  }

  

}

// export class class1{}
