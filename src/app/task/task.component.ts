import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../api';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  {
  
  @Input() task: any;
  @Output() onDeleteTask = new EventEmitter<any>();
  
  constructor(private taskAPI: Task, private toastr: ToastrService) {}

  deleteTask(taskId: number) { 
    this.taskAPI.delete(taskId).subscribe(()=> {
      this.onDeleteTask.emit();
      this.toastr.success('Task has been successfully created', 'Success!', { closeButton: true });    })
  }
}
