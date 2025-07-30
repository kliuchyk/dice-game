import Slider from "@mui/material/Slider";
import { marks } from "./utils";
import { Control, Controller } from "react-hook-form";
import { BoardInputs } from "../../Board/types";

interface NumberSliderProps {
  control: Control<BoardInputs, any, BoardInputs>;
}

export function NumberSlider({ control }: NumberSliderProps) {
  return (
    <Controller
      name="number"
      control={control}
      defaultValue={10}
      render={({ field }) => (
        <Slider
          sx={{ mt: 4, mb: 4 }}
          size="small"
          min={0}
          max={100}
          step={1}
          marks={marks}
          valueLabelDisplay="auto"
          color="secondary"
          {...field}
          value={field.value ?? 0}
          onChange={(_, value) => field.onChange(value)}
        />
      )}
    />
  );
}
