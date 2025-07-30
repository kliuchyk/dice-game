import { COMPARISONS } from "@/app/constants";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export function ComparisonSelector() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="dice-radio-buttons-group-label"
        defaultValue={COMPARISONS.UNDER}
        name="radio-buttons-group"
        color="secondary"
      >
        <FormControlLabel
          value={COMPARISONS.UNDER}
          control={<Radio color="secondary" />}
          label="Under"
        />
        <FormControlLabel
          value={COMPARISONS.OVER}
          control={<Radio color="secondary" />}
          label="Over"
        />
      </RadioGroup>
    </FormControl>
  );
}
