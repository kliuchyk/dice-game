"use client";

import { AlertInfo, PreviousResult } from "@/app/types";
import { useState } from "react";
import { SnackbarAlert } from "./SnackbarAlert";
import { GameForm } from "../GameForm";
import { ResultWidget } from "./ResultWidget";
import { Box } from "@mui/material";

interface BoardProps {
  addResult: (result: PreviousResult) => void;
}

export function Board({ addResult }: BoardProps) {
  const [alert, setAlert] = useState<AlertInfo | null>(null);
  const [resultNumber, setResultNumber] = useState<number | null>(null);

  return (
    <Box marginTop={14}>
      <ResultWidget result={resultNumber} />
      <GameForm
        addResult={addResult}
        setAlert={setAlert}
        setResultNumber={setResultNumber}
      />
      {alert && (
        <SnackbarAlert
          alertType={alert.type}
          comparison={alert.comparison}
          setAlert={setAlert}
        />
      )}
    </Box>
  );
}
