import { Component, OnInit } from '@angular/core';
import { Task } from '../../api';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  activeTasks: any = [];
  completedTasks: any = [];

  constructor(private taskAPI: Task, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getTasks(true);
    this.getTasks(false);
  }

  onDrop(event: CdkDragDrop<string[]>) {  
    let task: any = event.previousContainer.data[event.previousIndex];
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      } else {
        this.updateTask(task);
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
  }

  getTasks(active) {
    this.taskAPI.query({ active: active }).subscribe((data) => {
      this[this.taskListName(active)] = data;
    });
  }

  taskListName(active) {
    const taskList = active ? 'activeTasks' : 'completedTasks';
    return taskList;
  }

  onDeleteTask(task) {
    if (task.active) {
      this.activeTasks = this.activeTasks.filter((item) => this.deleteTask(item, task));
    } else {
      this.completedTasks = this.completedTasks.filter((item) => this.deleteTask(item, task));
    }
  }

  deleteTask(item, task) {
    return item.id != task.id
  }

  updateTask(task) {
    this.taskAPI.update(task.id, {active: !task.active}).subscribe((data) => {
      Object.assign(task, data);
      if (!task.active) {
        this.toastr.success('Task has been successfully completed', 'Success!', { closeButton: true })
      } else {
        this.toastr.success('Task has been successfully undone', 'Success!', { closeButton: true })
      }
    })
  }

  onCreateTask(task) {
    this.activeTasks.unshift(task)
  }
}
