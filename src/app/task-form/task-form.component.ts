import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Task } from '../../api';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Input() task: any = {};
  @Output() onCreateTask = new EventEmitter<any>();
  @Output() onUpdateTask = new EventEmitter<any>();
  taskForm: FormGroup;
  
  constructor(private fb: FormBuilder, private taskAPI: Task, private toastr: ToastrService, private router: Router) {}
  
  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: [this.task.title || '', Validators.required],
      description: [this.task.description || '', Validators.required]
    })
  }

  onSubmit() {
    let params = this.task.id ? [this.task.id, this.taskForm.value] : [this.taskForm.value]
    this.taskAPI[!this.task.id ? 'create' : 'update'](...params).subscribe((data)=> {
      if (!this.task.id) {
        this.onCreateTask.emit(data);
        this.taskForm.reset();
        this.toastr.success('Task has been successfully created', 'Success!', { closeButton: true });
      } else {
        this.onUpdateTask.emit(data);
        this.router.navigate(['/tasks']);
        this.toastr.success('Task has been successfully udpdated', 'Success!', { closeButton: true });
      }
    })
  }
}
