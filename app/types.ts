export interface PreviousResult {
  time: string;
  guess: string;
  result: number;
  isCorrect: boolean;
}

export type AlertType = "success" | "error";
