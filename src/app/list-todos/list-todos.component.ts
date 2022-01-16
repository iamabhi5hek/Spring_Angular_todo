import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    {id: 1, description: 'Learn to code'},
    {id: 2, description: 'Learn to dance'},
    {id: 3, description: 'Learn to earn'}
  ]

  // todo = {
  //   id: 1,
  //   description: 'Learn to code'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
