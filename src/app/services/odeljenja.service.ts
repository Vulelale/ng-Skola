// ✅ src/app/services/odeljenja.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Odeljenje } from '../odeljenja';
import { environment } from '../../environments/environment';
import { CodebookItem } from '../grade';

@Injectable({
  providedIn: 'root'
})
export class OdeljenjeService {
  private apiUrl = `${environment.apiUrl}/api/Classes`;
  
  constructor(private http: HttpClient) {}
  
  getOdeljenja(): Observable<Odeljenje[]> {
    return this.http.get<Odeljenje[]>(this.apiUrl);
  }
  
  getOdeljenjeById(id: number): Observable<Odeljenje> {
    return this.http.get<Odeljenje>(`${this.apiUrl}/${id}`);
  }
  
  addOdeljenje(odeljenje: Odeljenje): Observable<any> {
    return this.http.post(this.apiUrl, odeljenje);
  }
  
  updateOdeljenje(odeljenje: Odeljenje): Observable<any> {
    return this.http.put(`${this.apiUrl}/${odeljenje.classId}`, odeljenje);
  }
  
  deleteOdeljenje(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getCodebookItems(name: string): Observable<CodebookItem[]> {
    return this.http.get<CodebookItem[]>(`${this.apiUrl}/codebooks/${name}`); 
  }
}