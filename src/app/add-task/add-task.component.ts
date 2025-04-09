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
  description = '';

  constructor(private taskService: TaskService) { }

  addTask(): void {
    const newTask = {
      title: this.title,
      description: this.description
    };

    this.taskService.addTask(newTask).subscribe(() => {
      this.title = '';
      this.description = '';
    });
  }
}
