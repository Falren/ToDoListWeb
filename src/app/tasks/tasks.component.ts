import { Component, OnInit } from '@angular/core';
import { Task } from '../../api';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: any;

  constructor(private taskAPI: Task) {}

  getTasks() {
    this.taskAPI.query().subscribe((data:any) => {
      this.tasks = data;
      console.log(this.tasks);

    })
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
