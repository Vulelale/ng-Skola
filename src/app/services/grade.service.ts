import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Grade } from '../grade';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  constructor() { }
  
  private mockGrades: Grade[] = [
    {
      id: '1',
      schoolYear: '2024/2025',
      razred: 'I razred',
      program: 'Opšti program',
      totalClasses: 3,
      totalStudents: 90
    },
    {
      id: '2',
      schoolYear: '2024/2025',
      razred: 'II razred',
      program: 'Sportski program',
      totalClasses: 2,
      totalStudents: 60
    },
    
    {
      id: '3',
      schoolYear: '2022/2023',
      razred: 'III razred',
      program: 'IT smer',
      totalClasses: 4,
      totalStudents: 30
    }
  ];
  
  getGrades(): Observable<Grade[]> {
    return of(this.mockGrades);
  }
  
  
  getGradeById(id: string): Observable<Grade | undefined> {
   
    const grade = this.mockGrades.find(g => g.id === id);
    
    return of(grade);
  }
  
  getPrograms(): Observable<string[]> {
    return of(['Opšti program', 'IT smer', 'Sportski program', 'Gimnazijski program']);
  }
  
  updateGrade(updatedGrade: Grade): Observable<any> {
   
    const index = this.mockGrades.findIndex(g => g.id === updatedGrade.id);
    if (index !== -1) {
      this.mockGrades[index] = updatedGrade; 
    }
    return of({ success: true });
  }

  addGrade(noviRazred: Grade): Observable<any> {
  this.mockGrades.push(noviRazred);
  return of({ success: true }).pipe(delay(300));
}
  
  
}
