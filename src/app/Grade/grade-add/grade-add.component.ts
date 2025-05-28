import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../services/grade.service';
import { CodebookItem } from '../../grade';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface GradeUpdateDto {
  gradeId: number;
  skolskaGodinaId: number;
  razredId: number;
  programId: number;
}

@Component({
  selector: 'app-grade-add',
  standalone: true,
  templateUrl: './grade-add.component.html',
  styleUrls: ['./grade-add.component.css'],
  imports: [FormsModule, CommonModule]
})
export class GradeAddComponent implements OnInit {
  noviRazred: GradeUpdateDto = {
    gradeId: 0,
    skolskaGodinaId: 0,
    razredId: 0,
    programId: 0
  };

  skolskeGodine: CodebookItem[] = [];
  razredi: CodebookItem[] = [];
  programi: CodebookItem[] = [];
  successMessage = '';
  errorMessage = '';

  constructor(private gradeService: GradeService, private router: Router) {}

  ngOnInit(): void {
    this.gradeService.getCodebookItems('Skolska godina').subscribe(data => this.skolskeGodine = data);
    this.gradeService.getCodebookItems('Razred').subscribe(data => this.razredi = data);
    this.gradeService.getCodebookItems('Program').subscribe(data => this.programi = data);
  }

  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';

    this.gradeService.addGrade(this.noviRazred).subscribe({
      next: () => {
        this.successMessage = '✅ Uspešno dodat razred!';
        setTimeout(() => this.router.navigate(['/grade-view']), 1500);
      },
      error: err => {
        console.error(err);
        this.errorMessage = '❌ Greška prilikom dodavanja razreda.';
      }
    });
  }
}


