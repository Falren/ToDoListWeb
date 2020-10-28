import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class Task {
  constructor(private http: HttpClient) {}

  query() {
    return this.http.get(`${environment.apiEndpoint}/api/v1/tasks`);
  }

  create(params?) {
    return this.http.post(`${environment.apiEndpoint}/api/v1/tasks`, params);
  }

  update(id?, params?) {
    return this.http.put(`${environment.apiEndpoint}/api/v1/tasks/${id}`, params);
  }
  delete(id) {
    return this.http.delete(`${environment.apiEndpoint}/api/v1/tasks/${id}`);
  }
}
