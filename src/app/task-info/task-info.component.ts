import { Component, Input } from '@angular/core';
import { Task } from '../../api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent {

  @Input() task: any = {};

  constructor(private taskAPI: Task, private route: ActivatedRoute){
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.getTask(params.id);
      }
    });
  }
    
    getTask(id) {
      this.taskAPI.get(id).subscribe((data) => {
        this.task = data;
      })
    }
}
