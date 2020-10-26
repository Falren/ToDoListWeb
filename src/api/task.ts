import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class Task {
  constructor(private http: HttpClient) {}

  query() {
    return this.http.get(`${environment.apiEndpoint}/api/v1/tasks`);
  }

  create(params) {
    return this.http.post(`${environment.apiEndpoint}/api/v1/tasks`, params);
  }
}