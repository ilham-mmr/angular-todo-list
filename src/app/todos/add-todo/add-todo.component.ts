import { TodosService } from './../services/todos.service';
import { Todo } from './../todos/types/todo.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private todosService: TodosService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group(
      {
        todoContent: ['', Validators.required]
      }
    )
  }

  addTodoItem() {
    const todo = this.form.value.todoContent;

    this.todosService.addTodoItem(todo);

    this.form.reset()
  }


}
