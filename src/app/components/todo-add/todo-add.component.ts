import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoForm : FormGroup;
  todo : any;
  constructor(
    private formBuilder : FormBuilder,
    private todoService : TodoService
    ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  get f(){return this.todoForm.controls}

  submit(){
    const title : string = this.f.title.value;
    const description : string = this.f.description.value;
    this.todoService.createTodo(title,description);
  }

  createForm(){
    this.todoForm = this.formBuilder.group({
      title : [null,Validators.required],
      description : [null,Validators.required]
    })
  }

}