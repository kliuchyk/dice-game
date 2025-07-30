import { COMPARISONS } from "@/app/constants";

export interface BoardInputs {
  number: number;
  comparison: keyof typeof COMPARISONS;
}
