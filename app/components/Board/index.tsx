"use client";

import { Box, Button, capitalize } from "@mui/material";
import { NumberSlider } from "../Slider";
import { ComparisonSelector } from "../ComparisonSelector";
import { ResultWidget } from "../ResultWidget";
import { useForm } from "react-hook-form";
import { COMPARISONS } from "@/app/constants";
import { BoardInputs } from "./types";
import { AlertType, PreviousResult } from "@/app/types";
import { useState } from "react";
import { SnackbarAlert } from "../SnackbarAlert";

interface BoardProps {
  addResult: (result: PreviousResult) => void;
}

export function Board({ addResult }: BoardProps) {
  const [alert, setAlert] = useState<{
    open: boolean;
    type: AlertType;
    comparison?: string;
  }>({ open: false, type: "success" });
  const [resultNumber, setResultNumber] = useState<number | null>(null);

  const { control, handleSubmit } = useForm<BoardInputs>({
    defaultValues: {
      number: 10,
      comparison: COMPARISONS.under,
    },
  });

  function onSubmit({ number, comparison }: BoardInputs) {
    const generated = Math.floor(Math.random() * 100) + 1;
    const isCorrect =
      (comparison === COMPARISONS.under && number > generated) ||
      (comparison === COMPARISONS.over && number < generated);
    const comparisonText = comparison === COMPARISONS.under ? "under" : "over";

    setResultNumber(generated);

    addResult({
      time: new Date().toLocaleTimeString(),
      guess: `${capitalize(comparison)} ${number}`,
      result: generated,
      isCorrect,
    });

    setAlert({
      open: true,
      type: isCorrect ? "success" : "error",
      comparison: comparisonText,
    });
  }

  const handleCloseAlert = (
    _e?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setAlert((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={320}
          marginTop={14}
        >
          <ResultWidget result={resultNumber} />
          <ComparisonSelector control={control} />
          <NumberSlider control={control} />
          <Button type="submit" fullWidth variant="contained" color="secondary">
            PLAY
          </Button>
        </Box>
      </form>

      <SnackbarAlert
        open={alert.open}
        onClose={handleCloseAlert}
        alertType={alert.type}
        comparison={alert.comparison}
      />
    </>
  );
}
