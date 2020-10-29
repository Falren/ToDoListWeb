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
  
  showEdit:boolean=false;

  constructor(private taskAPI: Task, private toastr: ToastrService) {}

  deleteTask(taskId: number) { 
    this.taskAPI.delete(taskId).subscribe(()=> {
      if(window.confirm('Do you want to delete task?')) {
        this.onDeleteTask.emit();
        this.toastr.success('Task has been successfully created', 'Success!', { closeButton: true });
      }
    })
  }

  onUpdateTask() {
    this.showEdit=!this.showEdit;
  }

  toggleTag() {
    this.showEdit=!this.showEdit;
  }
}
