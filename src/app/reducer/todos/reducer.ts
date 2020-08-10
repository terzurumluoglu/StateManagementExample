import { createReducer, on } from '@ngrx/store';
import { ProvideTodos, DeleteTodo, AddTodo, UpdateTodo } from './actions';
import { ToDo } from 'src/app/models/todo';

interface TodoState {
  todos: ToDo[];
}

const initialTodoState: TodoState = {
  todos: []
};

const TodoReducer = createReducer(
  initialTodoState,
  on(ProvideTodos, (state: TodoState, { todos }) => ({
    ...state,
    todos
  })),
  on(DeleteTodo, (state: TodoState, { id }) => ({
    ...state,
    todos: state.todos.filter(p => p.id !== id)
  })),
  on(AddTodo, (state: TodoState, { todo }) => (
    {
      ...state,
      todos: state.todos.concat(todo)
    }
  )),
  on(UpdateTodo, (state: TodoState, { todo }) => (
    {
      ...state,
      todos : state.todos.map(u => u.id !== todo.id ? u : todo)
    }
  ))
);

export interface AppState {
  appTodo: TodoState;
}

export const AppReducers = {
  appTodo: TodoReducer
};