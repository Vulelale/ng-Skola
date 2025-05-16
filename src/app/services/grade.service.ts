import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Grade } from '../grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  constructor() { }
  
  private mockGrades: Grade[] = [
    {
      schoolYear: '2024/2025',
      razred: 'I razred',
      program: 'Opšti program',
      totalClasses: 3,
      totalStudents: 90
    },
    {
      schoolYear: '2024/2025',
      razred: 'II razred',
      program: 'Sportski program',
      totalClasses: 2,
      totalStudents: 60
    }
  ];
  
  getGrades(): Observable<Grade[]> {
    return of(this.mockGrades).pipe(delay(500));
  }
  
  
}
