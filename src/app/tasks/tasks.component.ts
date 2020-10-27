import { Component, OnInit } from '@angular/core';
import { Task } from '../../api';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  
  tasks = [];
  
  constructor(private taskAPI: Task) {
  }

  ngOnInit(): void {
    this.getTasks();
  }
  
  getTasks() {
    this.taskAPI.query().subscribe(this.onGetTasksSuccess)
  }

  onGetTasksSuccess = (data) => {
    this.tasks = data;
  }

  onCreateTask($event) {
    this.tasks.unshift($event)
  } 
}
