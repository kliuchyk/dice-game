import { Box, Button } from "@mui/material";
import { NumberSlider } from "../Slider";
import { ComparisonSelector } from "../ComparisonSelector";

export function Board() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={320}
      marginTop={14}
    >
      <ComparisonSelector />
      <NumberSlider />
      <Button fullWidth variant="contained" color="secondary">
        PLAY
      </Button>
    </Box>
  );
}
