export interface Loteria {
  acumulado: boolean;
  concursoEspecial: boolean;
  dataApuracao: string;
  dataPorExtenso: string;
  dataProximoConcurso: string;
  dezenas: string[] | null;
  numeroDoConcurso: number;
  quantidadeGanhadores: number;
  valorEstimadoProximoConcurso: number;
  valorPremio: number;
}

export interface MegaSena extends Loteria {}
export interface Quina extends Loteria {}
export interface Timemania extends Loteria {
  timeDoCoracao: string;
}
