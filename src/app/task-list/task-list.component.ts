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
  editTitle: string = '';
  editDescription: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  startEdit(task: any): void {
    this.editTaskId = task._id;
    this.editTitle = task.title;
    this.editDescription = task.description;
  }

  saveEdit(): void {
    if (this.editTaskId) {
      const updatedTask = {
        title: this.editTitle,
        description: this.editDescription
      };

      this.taskService.updateTask(this.editTaskId, updatedTask).subscribe(() => {
        this.editTaskId = null;
        this.editTitle = '';
        this.editDescription = '';
        this.loadTasks();
      });
    }
  }

  cancelEdit(): void {
    this.editTaskId = null;
    this.editTitle = '';
    this.editDescription = '';
  }
}
