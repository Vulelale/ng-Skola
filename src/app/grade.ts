export interface Grade {
  gradeId: number;
  skolskaGodinaId: number;
  razredId: number;
  programId: number;

  skolskaGodina?: string;
  razred?: string;
  program?: string;
  ukupanBrojOdeljenja?: number;
  ukupanBrojUcenika?: number;
}



export interface CodebookItem {
  itemId: number;
  value: string;
}


export interface GradeUpdateDto {
  gradeId: number;              // možeš staviti `0` za novi unos
  skolskaGodinaId: number;
  razredId: number;
  programId: number;
}


