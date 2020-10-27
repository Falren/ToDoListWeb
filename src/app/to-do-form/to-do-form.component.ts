import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  MyForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.MyForm = this.fb.group({
      title: '',
      description: '',
    })
  }

}
