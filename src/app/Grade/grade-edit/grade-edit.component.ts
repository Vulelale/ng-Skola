import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../../services/grade.service';
import { Grade, CodebookItem } from '../../grade';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grade-edit',
  standalone: true,
  templateUrl: './grade-edit.component.html',
  styleUrls: ['./grade-edit.component.css'],
  imports: [CommonModule, FormsModule]
})
export class GradeEditComponent implements OnInit {
  grade: Grade | null = null;
  skolskeGodine: CodebookItem[] = [];
  razredi: CodebookItem[] = [];
  programi: CodebookItem[] = [];
  successMessage: string = '';
errorMessage: string = '';


  constructor(
    private gradeService: GradeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gradeService.getGradeById(id).subscribe(g => this.grade = g);
    this.gradeService.getCodebookItems("Skolska godina").subscribe(d => this.skolskeGodine = d);
    this.gradeService.getCodebookItems("Razred").subscribe(d => this.razredi = d);
    this.gradeService.getCodebookItems("Program").subscribe(d => this.programi = d);
  }

save(): void {
  if (!this.grade) return;

  this.successMessage = '';
  this.errorMessage = '';

  this.gradeService.updateGrade(this.grade).subscribe({
    next: () => {
      this.successMessage = '✅ Uspešno sačuvano!';
      setTimeout(() => this.router.navigate(['/grade-view']), 1500); // sačekaj 1.5s pa preusmeri
    },
    error: (err) => {
      console.error('Greška:', err);
      this.errorMessage = '❌ Greška prilikom čuvanja. Pokušajte ponovo.';
    }
  });
}



}





