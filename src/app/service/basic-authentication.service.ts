import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http:HttpClient
  ) { }

  authenticate(username: string, password: string){
    if(username === "username" && password === 'dummy'){ 
      sessionStorage.setItem('authenticatedUser', username)
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user =  sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }


  executeBasicAuthService(username: string, password: string){

    let basicAuthString = 'Basic ' + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
       Authorization : basicAuthString 
    });

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username);
            return data;
          }
        )
      );
  }

}


export class AuthenticationBean{

  constructor(public message:String){

  }
}
