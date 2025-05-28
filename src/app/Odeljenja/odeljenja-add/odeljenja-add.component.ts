import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Odeljenje } from '../../odeljenja';
import { OdeljenjeService } from '../../services/odeljenja.service';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../grade';
import { CodebookItem } from '../../grade';

@Component({
  selector: 'app-odeljenje-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './odeljenja-add.component.html',
  styleUrls: ['./odeljenja-add.component.css']
})
export class OdeljenjeAddComponent implements OnInit {
  novoOdeljenje: Odeljenje = {
    classId: 0,
    gradeId: 0,
    naziv: '',
    vrsta: '',
    jezikNastave: '',
    kombinovano: false,
    celodnevnaNastava: false,
    izdvojenoOdeljenje: false,
    nazivIzdvojeneSkole: '',
    odeljenjskiStaresina: '',
    smena: '',
    ukupanBrojUcenika: 0,
    brojUcenika: 0,
    brojUcenica: 0
  };

  gradeOpcije: Grade[] = [];
  vrste: CodebookItem[] = [];
  jezici: CodebookItem[] = [];

  constructor(
    private odeljenjeService: OdeljenjeService,
    private gradeService: GradeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gradeService.getGrades().subscribe(data => this.gradeOpcije = data);
    this.gradeService.getCodebookItems("Vrsta odeljenja").subscribe(data => this.vrste = data);
    this.gradeService.getCodebookItems("Jezik nastave").subscribe(data => this.jezici = data);
  }

  onSubmit(): void {
    this.odeljenjeService.addOdeljenje(this.novoOdeljenje).subscribe({
      next: () => {
        alert('Uspešno dodato!');
        this.router.navigate(['/odeljenja-view']);
      },
      error: (err) => console.error('Greška:', err)
    });
  }
}


