
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../grade';


@Component({
  selector: 'app-grade-view',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './grade-view.component.html',
  styleUrl: './grade-view.component.css'
})
export class GradeViewComponent implements OnInit {
  grades: Grade[] = [];
  
  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.loadGrades();
  }

  private loadGrades(): void {
  this.gradeService.getGrades().subscribe({
    next: (grades: Grade[]) => this.grades = grades, 
    error: (err: any) => console.error('Error loading grades:', err) 
  });
}

  editGrade(grade: Grade): void {
    // TODO: Implement edit logic
    alert(`Edit grade: ${grade.razred}`);
  }

  deleteGrade(grade: Grade): void {
    // TODO: Implement delete logic
    if(confirm(`Delete grade: ${grade.razred}?`)) {
      console.log('Deleting grade:', grade);
    }
  }
}
