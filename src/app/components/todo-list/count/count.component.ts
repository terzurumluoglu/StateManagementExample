import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  count$: Observable<number> = this.todoService.todoCount$;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

}
