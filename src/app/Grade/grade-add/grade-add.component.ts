import { Component } from '@angular/core';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../grade';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grade-add',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './grade-add.component.html',
  styleUrls: ['./grade-add.component.css']
})
export class GradeAddComponent {
  noviRazred: Partial<Grade> = {
    schoolYear: '',
    razred: '',
    program: '',
    totalClasses: 0,
    totalStudents: 0
  };

  skolskeGodine: string[] = ['2023/2024', '2024/2025', '2025/2026'];
  razredi: string[] = ['I razred', 'II razred', 'III razred', 'IV razred', 'V razred', 'VI razred', 'VII razred', 'VIII razred'];
  programi: string[] = [];

  constructor(
    private gradeService: GradeService,
    private router: Router
  ) {
    this.loadPrograms();
  }

  private loadPrograms(): void {
    this.gradeService.getPrograms().subscribe({
      next: (programs) => this.programi = programs,
      error: (err) => console.error('Greška pri učitavanju programa:', err)
    });
  }

  onSubmit(): void {
    const potpuniRazred: Grade = {
      id: Date.now().toString(),
      ...this.noviRazred,
      totalClasses: 0,
      totalStudents: 0
    } as Grade;

    this.gradeService.addGrade(potpuniRazred).subscribe({
      next: () => {
        alert('Razred uspešno dodat!');
        this.router.navigate(['/grade-view']);
      },
      error: (err) => console.error('Greška pri dodavanju:', err)
    });
  }
}