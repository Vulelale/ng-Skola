// src/app/services/odeljenje.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Odeljenje } from '../odeljenja';
import { Grade } from '../grade';

@Injectable({
  providedIn: 'root'
})
export class OdeljenjeService {
  private mockOdeljenja: Odeljenje[] = [
    {
      id: 'c1',
      naziv: '1A',
      gradeId: '1',
      vrsta: 'Opšte',
      jezikNastave: 'Srpski',
      kombinovano: false,
      celodnevno: true,
      izdvojeno: false,
      staresina: 'Petar Petrović', 
      smena: 'Prva',
      ukupnoUcenika: 25, 
      brojDecaka: 12,    
      brojDevojcica: 13  
    },
    {
      id: 'c1',
      naziv: '1A',
      gradeId: '1',
      vrsta: 'Opšte',
      jezikNastave: 'Srpski',
      kombinovano: false,
      celodnevno: true,
      izdvojeno: false,
      staresina: 'Petar Petrović', 
      smena: 'Prva',
      ukupnoUcenika: 25, 
      brojDecaka: 12,    
      brojDevojcica: 13  
    }
  ];
  
  constructor() { }
  
  getOdeljenja(): Observable<Odeljenje[]> {
    return of(this.mockOdeljenja);
  }
  
  getOdeljenjeById(id: string): Observable<Odeljenje | undefined> {
    return of(this.mockOdeljenja.find(o => o.id === id));
  }
  
  addOdeljenje(novoOdeljenje: Odeljenje): Observable<any> {
    this.mockOdeljenja.push(novoOdeljenje);
    return of({ success: true });
  }
  
  updateOdeljenje(updatedOdeljenje: Odeljenje): Observable<any> {
    const index = this.mockOdeljenja.findIndex(o => o.id === updatedOdeljenje.id);
    if (index !== -1) {
      this.mockOdeljenja[index] = updatedOdeljenje;
    }
    return of({ success: true });
  }
  
  deleteOdeljenje(id: string): Observable<any> {
    this.mockOdeljenja = this.mockOdeljenja.filter(o => o.id !== id);
    return of({ success: true });
  }
}