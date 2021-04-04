import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class EmployeeService{

    constructor(private http: HttpClient) { }

    getEmployee(): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      return this.http.get("https://localhost:44391/api/v1/employee/getall");
    }
  }