// src/app/Odeljenje/odeljenje-add/odeljenje-add.component.ts
import { Component } from '@angular/core';
import { OdeljenjeService } from '../../services/odeljenja.service';
import { Odeljenje } from '../../odeljenja';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odeljenje-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './odeljenja-add.component.html',
  styleUrls: ['./odeljenja-add.component.css']
})
export class OdeljenjeAddComponent {
  novoOdeljenje: Odeljenje = {
    id: Date.now().toString(),
    naziv: '',
    gradeId: '',
    vrsta: '',
    jezikNastave: '',
    kombinovano: false,
    celodnevno: false,
    izdvojeno: false,
    staresina: '',
    smena: '',
    ukupnoUcenika: 0,
    brojDecaka: 0,
    brojDevojcica: 0
  };

  constructor(
    private odeljenjeService: OdeljenjeService,
    private router: Router
  ) {}

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