import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OdeljenjeService } from '../../services/odeljenja.service';
import { GradeService } from '../../services/grade.service';
import { Odeljenje } from '../../odeljenja';
import { CodebookItem, Grade } from '../../grade';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-odeljenje-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './odeljenja-edit.component.html',
  styleUrls: ['./odeljenja-edit.component.css']
})
export class OdeljenjeEditComponent implements OnInit {
  odeljenje: Odeljenje | null = null;
  gradeOpcije: Grade[] = [];
  vrste: CodebookItem[] = [];
  jezici: CodebookItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private odeljenjeService: OdeljenjeService,
    private gradeService: GradeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadOdeljenje(id);
      this.loadDropdowns();
    }
  }

  loadOdeljenje(id: number): void {
    this.odeljenjeService.getOdeljenjeById(id).subscribe({
      next: (data) => this.odeljenje = data,
      error: (err) => {
        console.error('Greška:', err);
        this.router.navigate(['/odeljenja-view']);
      }
    });
  }

  loadDropdowns(): void {
    this.gradeService.getGradesWithNames().subscribe(g => this.gradeOpcije = g);
    this.gradeService.getCodebookItems('Vrsta odeljenja').subscribe(v => this.vrste = v);
    this.gradeService.getCodebookItems('Jezik nastave').subscribe(j => this.jezici = j);
  }

  saveChanges(): void {
    if (!this.odeljenje) return;

    this.odeljenjeService.updateOdeljenje(this.odeljenje).subscribe({
      next: () => {
        alert('Uspešno sačuvano!');
        this.router.navigate(['/odeljenja-view']);
      },
      error: (err) => {
        console.error('Greška:', err);
        alert('Greška pri čuvanju izmena!');
      }
    });
  }
}
