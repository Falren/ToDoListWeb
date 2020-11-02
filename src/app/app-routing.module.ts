import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component'
import { TaskInfoComponent } from './task-info/task-info.component'
const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:id', component: TaskInfoComponent },
  
  { path: '**', redirectTo: 'tasks', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
