import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { TodosRoutingModule } from './todos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EditModalComponent } from './edit-modal/edit-modal.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    AddTodoComponent,
    EditModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TodosRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodosModule { }
