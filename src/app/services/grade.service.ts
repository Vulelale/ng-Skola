import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grade, CodebookItem } from '../grade';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private apiUrl = `${environment.apiUrl}/api/grades`;
  
  constructor(private http: HttpClient) {}
  
  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.apiUrl}/with-names`);
    
  }
  
  getGradeById(id: number): Observable<Grade> {
    return this.http.get<Grade>(`${this.apiUrl}/${id}`);
  }
  
  addGrade(grade: Grade): Observable<any> {
    return this.http.post(this.apiUrl, grade);
  }
  
  updateGrade(grade: Grade): Observable<any> {
    return this.http.put(`${this.apiUrl}/${grade.gradeId}`, grade);
  }
  
  deleteGrade(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
  getCodebookItems(name: string): Observable<CodebookItem[]> {
    return this.http.get<CodebookItem[]>(`${this.apiUrl}/codebooks/${name}`);
  }
  
  getGradesWithNames(): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.apiUrl}/with-names`);
  }
  
}





