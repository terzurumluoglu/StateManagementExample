import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { AppReducers } from "./reducer/todos/reducer";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoService } from './services/todo/todo.service';
import { CountComponent } from './components/todo-list/count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppReducers),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(todoService: TodoService) {
    todoService.getTodos();
  }
}
