import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
private http = inject(HttpClient);
 private apiUrl = environment.apiUrl;
 
 public get():Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
