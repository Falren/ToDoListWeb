import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  {
  @Input() task: any = {};
  @Output() onDeleteTask = new EventEmitter<any>();
  
  constructor(private taskAPI: Task, private toastr: ToastrService) {}

  deleteTask(task: any) { 
    if(window.confirm('Do you want to delete task?')) {
      this.taskAPI.delete(task.id).subscribe((data)=> {
        this.onDeleteTask.emit(data);
        this.toastr.success('Task has been successfully deleted', 'Success!', { closeButton: true });
      })
    }
  }
}
