import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { ProvideTodos, DeleteTodo, AddTodo, UpdateTodo } from 'src/app/reducer/todos/actions';
import { AppState } from '../../reducer/todos/reducer';
import { ToDo } from "../../models/todo";
import { TODOS } from "../../data/todolist-mock";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store<AppState>) {}

  todos$: Observable<ToDo[]> = this.store
    .select(s => s.appTodo)
    .pipe(map(b => b.todos));

  todoCount$: Observable<number> = this.todos$.pipe(map(b => b.length));

  getTodos() {
    // Normally we would use the HttpClient to fetch some data and then dispatch it
    this.store.dispatch(ProvideTodos({ todos: TODOS }));
  }

  deleteTodo(id: string) {
    this.store.dispatch(DeleteTodo({ id }));
  }

  createTodo(title: string, description: string) {
    const todo: ToDo = new ToDo(title, description);
    console.log(todo);
    this.store.dispatch(AddTodo({ todo: todo }));
  }

  updateTodo(todo : ToDo){
    this.store.dispatch(UpdateTodo({todo : todo}));
  }
}
