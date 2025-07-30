import { Box } from "@mui/material";
import { Board } from "./components/Board";

export default function Home() {
  return (
    <div>
      <main>
        <Box display="flex" justifyContent="center">
          <Board />
        </Box>
      </main>
    </div>
  );
}
