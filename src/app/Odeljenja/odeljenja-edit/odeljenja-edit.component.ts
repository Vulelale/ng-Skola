// src/app/Odeljenja/odeljenja-edit/odeljenja-edit.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OdeljenjeService } from '../../services/odeljenja.service';
import { Odeljenje } from '../../odeljenja';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-odeljenje-edit',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './odeljenja-edit.component.html',
  styleUrls: ['./odeljenja-edit.component.css']
})
export class OdeljenjeEditComponent {
  odeljenje: Odeljenje | null = null;
  vrsteOdeljenja: string[] = ['Opšte', 'Specijalno', 'Muzičko', 'Tehničko'];
  jeziciNastave: string[] = ['Srpski', 'Mađarski', 'Albanski', 'Slovački'];
  programi: string[] = ['Opšti program', 'IT smer', 'Sportski program'];

  constructor(
    private route: ActivatedRoute,
    private odeljenjeService: OdeljenjeService,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadOdeljenje(id);
    }
  }

  private loadOdeljenje(id: string): void {
    this.odeljenjeService.getOdeljenjeById(id).subscribe({
      next: (data) => {
        if (data) {
          this.odeljenje = data;
        } else {
          alert('Odeljenje nije pronađeno!');
          this.router.navigate(['/odeljenja-view']);
        }
      },
      error: (err) => {
        console.error('Greška:', err);
        this.router.navigate(['/odeljenja-view']);
      }
    });
  }

  saveChanges(): void {
    if (!this.odeljenje) {
      alert('Odeljenje nije učitano!');
      return;
    }

    this.odeljenjeService.updateOdeljenje(this.odeljenje).subscribe({
      next: () => {
        alert('Uspešno sačuvano!');
        this.router.navigate(['/odeljenja-view']);
      },
      error: (err) => console.error('Greška:', err)
    });
  }
}