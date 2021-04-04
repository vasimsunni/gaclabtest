import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class TaskService{

    constructor(private http: HttpClient) { }

    getByDates(startDate, endDate): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      return this.http.get("https://localhost:44391/api/v1/task/getbydates?startDate="+startDate+"&endDate="+endDate);
    }
    save(task): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      var body=JSON.stringify(task);
      return this.http.post("https://localhost:44391/api/v1/task/save",body);
    }

  }