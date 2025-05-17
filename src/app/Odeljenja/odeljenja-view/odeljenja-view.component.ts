// src/app/Odeljenja/odeljenja-view/odeljenja-view.component.ts
import { Component } from '@angular/core';
import { OdeljenjeService } from '../../services/odeljenja.service';
import { Odeljenje } from '../../odeljenja';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-odeljenje-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './odeljenja-view.component.html',
  styleUrls: ['./odeljenja-view.component.css']
})
export class OdeljenjeViewComponent {
  odeljenja: Odeljenje[] = [];

  constructor(private odeljenjeService: OdeljenjeService) {
    this.loadOdeljenja();
  }

  private loadOdeljenja(): void {
    this.odeljenjeService.getOdeljenja().subscribe({
      next: (data) => this.odeljenja = data,
      error: (err) => console.error('Greška pri učitavanju:', err)
    });
  }

  deleteOdeljenje(id: string): void {
    if(confirm('Da li ste sigurni?')) {
      this.odeljenjeService.deleteOdeljenje(id).subscribe({
        next: () => this.loadOdeljenja(),
        error: (err) => console.error('Greška pri brisanju:', err)
      });
    }
  }
}
