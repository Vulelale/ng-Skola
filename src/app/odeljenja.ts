// src/app/odeljenja.ts
export interface Odeljenje {
  id: string;
  naziv: string;
  gradeId: string;
  vrsta: string;
  jezikNastave: string;
  kombinovano: boolean;
  celodnevno: boolean;
  izdvojeno: boolean;
  nazivIzdvojeneSkole?: string;
  staresina: string; 
  smena: string;
  ukupnoUcenika: number; 
  brojDecaka: number;    
  brojDevojcica: number; 
}