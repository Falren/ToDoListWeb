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
  @Output() onCompleteTask = new EventEmitter<any>();
  
  constructor(private taskAPI: Task, private toastr: ToastrService) {}

  deleteTask(taskId: number) { 
    if(window.confirm('Do you want to delete task?')) {
    this.taskAPI.delete(taskId).subscribe((data)=> {
        this.onDeleteTask.emit(data);
        this.toastr.success('Task has been successfully deleted', 'Success!', { closeButton: true });
      })
    }
  }

  updateTask(taskId: number, active) {
    this.taskAPI.update(taskId, {active: active}).subscribe((data) => {
      this.onCompleteTask.emit(data);
      if (active === false) {
        this.toastr.success('Task has been successfully completed', 'Success!', { closeButton: true })
      } else {
        this.toastr.success('Task has been successfully undone', 'Success!', { closeButton: true })
      }
    })
  }

}
