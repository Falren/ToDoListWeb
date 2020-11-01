import { Component, OnInit } from '@angular/core';
import { Task } from '../../api';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  activeTasks: any = [];
  completedTasks: any = [];


  constructor(private taskAPI: Task) {
  }

  ngOnInit(): void {
    this.getTasks(true);
    this.getTasks(false);
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
    if (task.active === true) {
      this.activeTasks = this.activeTasks.filter((item) => { return item.id != task.id });
    } else {
      this.completedTasks = this.completedTasks.filter((item) => { return item.id != task.id });
    }
  }

  onCompleteTask(task) {
    console.log(task)
    if (task.active === true) {
      this.completedTasks = this.completedTasks.filter((item) => { return item.id != task.id });
      this.activeTasks.unshift(task)
    } else {
      this.activeTasks = this.activeTasks.filter((item) => { return item.id != task.id });
      this.completedTasks.unshift(task)
    }
  }

  onCreateTask(task) {
    this.activeTasks.unshift(task)
  }
}
