import { Injectable } from '@angular/core';
import {Bucketlist} from './bucketlist';


@Injectable()
export class BucketlistDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;


  // Placeholder for todo's
  todos: Bucketlist[] = [];

  constructor() { }

  // Simulate POST /todos
  addTodo(todo: Bucketlist): BucketlistDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): BucketlistDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Bucketlist {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Bucketlist[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Bucketlist {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
 toggleTodoComplete(todo: Bucketlist){
   let updatedTodo = this.updateTodoById(todo.id, {
     complete: !todo.complete
   });
   return updatedTodo;
 }


}
