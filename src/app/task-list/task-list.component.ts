import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  editTaskId: string | null = null;
  editTitle = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  startEdit(task: any): void {
    this.editTaskId = task._id;
    this.editTitle = task.title;
  }

  saveEdit(): void {
    if (this.editTaskId) {
      this.taskService.updateTask(this.editTaskId, this.editTitle).subscribe(() => {
        this.cancelEdit();
        this.loadTasks();
      });
    }
  }

  cancelEdit(): void {
    this.editTaskId = null;
    this.editTitle = '';
  }
}
