import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<ToDo[]> = this.todoService.todos$;
  count$: Observable<number> = this.todoService.todoCount$;
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  update(todo: ToDo) {
    if (todo.status) {
      // delete
      this.todoService.deleteTodo(todo.id);
    } else {
      // done
      const t: ToDo = {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        status: true
      };
      this.todoService.updateTodo(t);
    }
  }

}
