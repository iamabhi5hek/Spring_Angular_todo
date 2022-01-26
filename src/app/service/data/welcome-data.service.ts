  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class WelcomeDataService {

    constructor(
      private http:HttpClient
    ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name:string){

    let basicString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
       Authorization : basicString 
    });

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      {headers});
  }

  createBasicAuthenticationHttpHeader(){
    let username = 'username';
    let password = 'dummy';

    let basicAuthString = 'Basic ' + window.btoa(username + ":" + password);

    return basicAuthString;

  }


  }

  export class HelloWorldBean{

    constructor(public message:String){

    }
  }
