
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../grade';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grade-view',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
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
  
deleteGrade(gradeId: number): void {
  if (confirm('Da li ste sigurni da želite da obrišete ovaj razred?')) {
    this.gradeService.deleteGrade(gradeId).subscribe({
      next: () => {
        this.grades = this.grades.filter(g => g.gradeId !== gradeId);
        console.log('Razred uspešno obrisan.');
      },
      error: err => {
        console.error('Greška prilikom brisanja razreda:', err);
      }
    });
  }
}

  
  filter = {
    skolskaGodina: '',
    razred: '',
    program: ''
  };
  
filteredGrades(): Grade[] {
  return this.grades.filter(g =>
    (g.skolskaGodina?.toLowerCase() || '').includes(this.filter.skolskaGodina.toLowerCase()) &&
    (g.razred?.toLowerCase() || '').includes(this.filter.razred.toLowerCase()) &&
    (g.program?.toLowerCase() || '').includes(this.filter.program.toLowerCase())
  );
}

}
