import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodosService } from './../services/todos.service';
import { Todo } from './../todos/types/todo.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input('todo')
  todoProps: Todo | undefined;

  updateForm!: FormGroup;

  constructor(private todosService: TodosService, private modalService: NgbModal, private fb :FormBuilder,) {


  }

  ngOnInit(): void {
    this.updateForm = this.fb.group(
      {
        todoContent: [this.todoProps?.content, Validators.required]
      }
    )
  }

  onSwitched(value: boolean) {
    console.log(value);
    this.todosService.crossOff(this.todoProps?.id!);
  }

  onEdit(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.todosService.editTodoById(this.todoProps?.id!, this.updateForm.value.todoContent)
        },
        reason => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  onDelete() {
    if (this.todoProps !== undefined) {
      this.todosService.deleteTodoById(this.todoProps.id);
    }

  }
}
