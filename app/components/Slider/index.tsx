import Slider from "@mui/material/Slider";
import { marks } from "./utils";

export function NumberSlider() {
  return (
    <Slider
      sx={{ mt: 4, mb: 4 }}
      size="small"
      min={1}
      max={100}
      defaultValue={10}
      aria-label="Small"
      valueLabelDisplay="auto"
      shiftStep={30}
      step={1}
      marks={marks}
      color="secondary"
    />
  );
}
