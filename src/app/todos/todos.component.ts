import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { ApiService } from './api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = new Todo();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllTodos().subscribe(data => {
      this.todos = data;
    });
  }

  refreshTodos() {
    this.apiService.getAllTodos().subscribe((data) => {
      this.todos = data;
    },
    (error) => {
      console.error('Error deleting todo: ', error)
    })
  }
  
  deleteTodo(id: number): void {
    this.apiService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  addTodo() {
    this.apiService.addTodo(this.newTodo).subscribe((data) => {
      this.todos.push(data);
      this.newTodo = new Todo();
    })
  }
}
