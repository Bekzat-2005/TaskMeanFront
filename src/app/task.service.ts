import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'; // Express серверінің API URL

  constructor(private http: HttpClient) { }

  // Барлық тапсырмаларды алу
  getTasks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Жаңа тапсырма қосу
  addTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  // Тапсырманы жаңарту
  updateTask(id: string, task: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, task);
  }

  // Тапсырманы өшіру
  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
