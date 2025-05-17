import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../grade';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-grade-edit',
  standalone:true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './grade-edit.component.html',
  styleUrl: './grade-edit.component.css'
})
export class GradeEditComponent implements OnInit {
  grade: Grade | null = null;
  programs: string[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private gradeService: GradeService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Dobijen ID iz rute:', id); 
    
    if (id) {
      this.loadGrade(id);
      this.loadPrograms();
    } else {
      console.error('ID nije pronađen u ruti');
      this.router.navigate(['/grade-view']);
    }
  }
  
  private loadGrade(id: string): void {
    this.gradeService.getGradeById(id).subscribe({
      next: (grade) => {
        if (grade) {
          this.grade = grade;
          console.log('Učitani podaci:', this.grade); 
        } else {
          alert('Razred nije pronađen!');
          this.router.navigate(['/grade-view']);
        }
      },
      error: (err) => {
        console.error('Greška pri učitavanju:', err);
        this.router.navigate(['/grade-view']);
      }
    });
  }
  
  private loadPrograms(): void {
    this.gradeService.getPrograms().subscribe({
      next: (programs) => this.programs = programs,
      error: (err) => console.error('Error loading programs:', err)
    });
  }
  
 saveChanges(): void {
   console.log('Trenutni razred:', this.grade); 
  if (!this.grade) return;

  this.gradeService.updateGrade(this.grade).subscribe({
    next: () => {
      alert('Uspešno sačuvano!');
      this.router.navigate(['/grade-view']); 
    },
    error: (err) => console.error('Greška:', err)
  });
}
}
