import { Box, Button } from "@mui/material";
import { NumberSlider } from "../Slider";

export function Board() {
  return (
    <Box width={320} mt="113px">
      <NumberSlider />
      <Button fullWidth variant="contained">
        PLAY
      </Button>
    </Box>
  );
}
