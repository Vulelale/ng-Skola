// src/app/Odeljenja/odeljenje-view/odeljenje-view.component.ts
import { Component } from '@angular/core';
import { OdeljenjeService } from '../../services/odeljenja.service';
import { Odeljenje } from '../../odeljenja';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Dodaj za [(ngModel)]

@Component({
  selector: 'app-odeljenje-view',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './odeljenja-view.component.html',
  styleUrls: ['./odeljenja-view.component.css']
})
export class OdeljenjeViewComponent {
  odeljenja: Odeljenje[] = [];
  filtriranaOdeljenja: Odeljenje[] = [];
  filterNaziv: string = '';

  constructor(private odeljenjeService: OdeljenjeService) {
    this.loadOdeljenja();
  }

  private loadOdeljenja(): void {
    this.odeljenjeService.getOdeljenja().subscribe({
      next: (data) => {
        this.odeljenja = data;
        this.applyFilter();
      },
      error: (err) => console.error('Greška pri učitavanju:', err)
    });
  }

  applyFilter(): void {
    const kriterijum = this.filterNaziv.toLowerCase().trim();
    this.filtriranaOdeljenja = this.odeljenja.filter(o =>
      o.naziv.toLowerCase().includes(kriterijum)
    );
  }

  deleteOdeljenje(id: number): void {
  if (confirm('Da li ste sigurni da želite da obrišete ovo odeljenje?')) {
    this.odeljenjeService.deleteOdeljenje(id).subscribe({
      next: () => {
        alert('Odeljenje je uspešno obrisano.');
        this.loadOdeljenja(); // ponovo učitaj listu
      },
      error: (err) => {
        console.error('Greška pri brisanju:', err);
        alert('Greška pri brisanju odeljenja.');
      }
    });
  }
}
}

