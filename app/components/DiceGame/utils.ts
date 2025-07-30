import { PreviousResult } from "@/app/types";

export function limitResults(results: PreviousResult[]): PreviousResult[] {
  return results.slice(0, 10);
}
