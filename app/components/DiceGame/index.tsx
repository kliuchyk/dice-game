"use client";

import { Box } from "@mui/material";
import { Board } from "../Board";
import { PreviousResults } from "../PreviousResults";
import { useState } from "react";
import { PreviousResult } from "@/app/types";

export function DiceGame() {
  const [results, setResults] = useState<PreviousResult[]>([]);

  function addResult(newResult: PreviousResult) {
    setResults((prevResults) => {
      const updatedResults = [newResult, ...prevResults];
      return updatedResults.slice(0, 10);
    });
  }

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Board addResult={addResult} />
      {!!results.length && <PreviousResults results={results} />}
    </Box>
  );
}
