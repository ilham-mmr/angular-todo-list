import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes = [
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'todos/add',
    component: AddTodoComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
