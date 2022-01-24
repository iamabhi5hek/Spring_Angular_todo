import { HttpClient } from '@angular/common/http';
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
  // console.log("Executing executeHelloWorldBeanService")
}

executeHelloWorldBeanServiceWithPathVariable(name:string){
  return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  // console.log("Executing executeHelloWorldBeanService")
}

}

export class HelloWorldBean{

  constructor(public message:String){

  }
}
