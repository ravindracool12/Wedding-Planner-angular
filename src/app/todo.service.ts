import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>('http://3.83.162.199/api/profile');
  }

  getTodo(id: number) {
    return this.http.get<Todo>('http://3.83.162.199/api/todos/${id}');
  }
}
