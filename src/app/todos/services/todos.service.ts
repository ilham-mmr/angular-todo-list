import { ToastrService } from 'ngx-toastr';
import { UtilService } from './../../shared/services/util.service';
import { Todo } from './../todos/types/todo.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged, map, tap } from 'rxjs';


const getInitialValue = () => {
  const stringifiedObject = localStorage.getItem('todos')
  if (stringifiedObject) {
    const todos = JSON.parse(stringifiedObject) as Todo[];
    return todos;

  }
  return []
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos$ = new BehaviorSubject<Todo[]>(getInitialValue());

  constructor(private utilService: UtilService, private toastr: ToastrService) {
    this.init();
  }

  public init(): void {
    this.todos$.pipe(tap((todos) => {
      this.storeTolocalStorage();
    })).subscribe();
  }

  public addTodoItem(todo: string) {
    if (todo === '' || todo == undefined) {
      this.toastr.error('You can\'t add an empty todo', 'Oops');
      return;
    }
    const id = Math.random().toString(16).slice(2);
    const todos = this.todos$.getValue();
    const newTodo: Todo = {
      id,
      isChecked: false,
      content: todo,
    }
    todos.push(newTodo);
    this.todos$.next(todos)
    this.toastr.success('Your todo has been successfully added', 'Info');

  }

  public getTodoItems(): Observable<Todo[]> {
    return this.todos$;
  }

  public deleteTodoById(id: string): void {
    const todos: Todo[] = this.todos$.getValue();

    const modifiedTodos = todos.slice().filter(todo => todo.id !== id);

    this.todos$.next(modifiedTodos)
    this.toastr.success('Your todo has been successfully deleted', 'Info');

  }

  public crossOff(id: string): void {
    const todos: Todo[] = this.todos$.getValue();

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isChecked: !todo.isChecked
        }
      }
      return todo;
    })

    const updatedTodo = todos.filter(todo => todo.id === id)[0];
    if (!updatedTodo.isChecked) {
      this.utilService.showConfetti();

    } else {
      this.toastr.info('You have unchecked the selected todo', 'Info');
    }
    this.todos$.next(updatedTodos);

  }

  public editTodoById(id: string, content:string ){
    const todos: Todo[] = this.todos$.getValue();

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          content: content
        }
      }
      return todo;
    })


    this.todos$.next(updatedTodos);
    this.toastr.success('Your todo has been successfully updated', 'Info');
  }

  public storeTolocalStorage() {
    const todos: Todo[] = this.todos$.getValue();

    localStorage.setItem('todos', JSON.stringify(todos))
  }
}
