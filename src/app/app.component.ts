import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, AddTaskComponent, TaskListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent { }
