import { Box, Typography } from "@mui/material";

interface ResultWidgetProps {
  result: number | null;
}

export function ResultWidget({ result }: ResultWidgetProps) {
  return (
    <Box
      width={320}
      height={200}
      borderRadius={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#0000000A" }}
      mb={2}
    >
      {result && <Typography variant="h1">{result}</Typography>}
    </Box>
  );
}
