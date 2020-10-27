import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../api';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: any;

  constructor() { }

  ngOnInit(): void {
  }

}
