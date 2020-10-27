import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Task } from '../../api';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Output() onCreateTask = new EventEmitter<any>();

  taskForm: FormGroup;
  constructor(private fb: FormBuilder, private taskAPI: Task) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    this.taskAPI.create(this.taskForm.value).subscribe((data)=> {
      this.onCreateTask.emit(data);
      this.taskForm.reset();
    })
  }
}
