import { Component, OnInit } from '@angular/core';
import { Task } from '../../api';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks = [];

  constructor(private taskAPI: Task) {}

  getTasks() {
    this.taskAPI.query().subscribe(this.onGetTasksSuccess)
  }

  onGetTasksSuccess = (data) => {
    this.tasks = data;
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
