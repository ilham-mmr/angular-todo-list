import { Observable } from 'rxjs';
import { TodosService } from './../services/todos.service';
import { Todo } from './types/todo.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoList$: Observable<Todo[]> | undefined;

  constructor(private todosService: TodosService){

  }
  ngOnInit(): void {
    this.todoList$ = this.todosService.getTodoItems();
  }


}
