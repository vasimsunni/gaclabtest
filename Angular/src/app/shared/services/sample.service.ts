import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  API_KEY = 'fa767d32d22844c886ee8437c1057a86';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey="+this.API_KEY);
  }

  postData(data: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    const body = JSON.stringify(data);
    return this.http.post<any>("url" + '', body, { headers });
  }
}
