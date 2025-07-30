import { COMPARISONS } from "@/app/constants";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  capitalize,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { BoardInputs } from "../../Board/types";

interface ComparisonSelectorProps {
  control: Control<BoardInputs>;
}

export function ComparisonSelector({ control }: ComparisonSelectorProps) {
  return (
    <FormControl>
      <Controller
        name="comparison"
        control={control}
        render={({ field }) => (
          <RadioGroup
            {...field}
            row
            aria-labelledby="comparison-label"
            name="comparison"
          >
            <FormControlLabel
              value={COMPARISONS.under}
              control={<Radio color="secondary" />}
              label={capitalize(COMPARISONS.under)}
            />
            <FormControlLabel
              value={COMPARISONS.over}
              control={<Radio color="secondary" />}
              label={capitalize(COMPARISONS.over)}
            />
          </RadioGroup>
        )}
      />
    </FormControl>
  );
}
