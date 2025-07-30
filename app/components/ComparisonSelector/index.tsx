import { COMPARISONS } from "@/app/constants";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { BoardInputs } from "../Board/types";

interface ComparisonSelectorProps {
  control: Control<BoardInputs, any, BoardInputs>;
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
              value="under"
              control={<Radio color="secondary" />}
              label="Under"
            />
            <FormControlLabel
              value="over"
              control={<Radio color="secondary" />}
              label="Over"
            />
          </RadioGroup>
        )}
      />
    </FormControl>
  );
}
