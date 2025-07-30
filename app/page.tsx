import { Box } from "@mui/material";
import { Board } from "./components/Board";
import { PreviousResults } from "./components/PreviousResults";

export default function Home() {
  return (
    <main>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Board />
        <PreviousResults />
      </Box>
    </main>
  );
}
