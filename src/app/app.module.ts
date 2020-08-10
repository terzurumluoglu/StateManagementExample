import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from "@ngrx/store";
import { AppReducers } from "./reducer/todos/reducer";
import { TodoListComponent } from './components/home/todo-list/todo-list.component';
import { TodoAddComponent } from './components/home/todo-add/todo-add.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoService } from './services/todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoListComponent,
    TodoAddComponent
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
