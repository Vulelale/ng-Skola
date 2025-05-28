export interface Odeljenje {
  classId: number;
  gradeId: number;
  naziv: string;
  vrsta: string;
  jezikNastave: string;
  kombinovano: boolean;
  celodnevnaNastava: boolean;
  izdvojenoOdeljenje: boolean;
  nazivIzdvojeneSkole?: string;
  odeljenjskiStaresina?: string;
  smena?: string;
  ukupanBrojUcenika: number;
  brojUcenika: number;
  brojUcenica: number;
}
