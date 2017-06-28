import {Component} from '@angular/core';
import {Bucketlist} from './bucketlist';
import {BucketlistDataService} from './bucketlist-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BucketlistDataService]
})
export class AppComponent {

  newBucketlist: Bucketlist = new Bucketlist();

  constructor(private todoDataService: BucketlistDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newBucketlist);
    this.newBucketlist = new Bucketlist();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
