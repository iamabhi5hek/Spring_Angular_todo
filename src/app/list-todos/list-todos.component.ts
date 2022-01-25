import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date 
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message:string='';

  constructor(
    private todoDataService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoDataService.retrieveAllTodos('username').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id:any){
    this.todoDataService.deleteTodo('username', id).subscribe(
      response => {
        console.log(response);
        this.message='Task completed successfully!!'
        this.refreshTodos();
      }
    )
  }

  updateTodo(id:any){
      this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

  
}
