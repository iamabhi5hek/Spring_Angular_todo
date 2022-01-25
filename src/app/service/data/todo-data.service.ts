import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    public http:HttpClient
  ) { }

  retrieveAllTodos(username:string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    // console.log("Executing executeHelloWorldBeanService")
  }


  deleteTodo(username:string, id:any){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username:string, id:any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

}
 