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

  update(params) {
    return this.http.put(`${environment.apiEndpoint}/api/v1/tasks`, params);
  }
  delete() {
    return this.http.delete(`${environment.apiEndpoint}/api/v1/tasks`);
  }
}
