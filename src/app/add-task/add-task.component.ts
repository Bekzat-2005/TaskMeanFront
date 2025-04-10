import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {
  title = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (!this.title.trim()) return;
    this.taskService.addTask(this.title).subscribe(() => this.title = '');
  }
}
