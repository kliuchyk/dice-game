"use client";

import { Box, Button, capitalize } from "@mui/material";
import { NumberSlider } from "../Slider";
import { ComparisonSelector } from "../ComparisonSelector";
import { ResultWidget } from "../ResultWidget";
import { useForm } from "react-hook-form";
import { COMPARISONS } from "@/app/constants";
import { BoardInputs } from "./types";
import { PreviousResult } from "@/app/types";
import { useState } from "react";

interface BoardProps {
  addResult: (result: PreviousResult) => void;
}

export function Board({ addResult }: BoardProps) {
  const [resultNumber, setResultNumber] = useState<number | null>(null);

  const { control, handleSubmit } = useForm<BoardInputs>({
    defaultValues: {
      number: 10,
      comparison: COMPARISONS.under,
    },
  });

  function onSubmit({ number, comparison }: BoardInputs) {
    const resultNumber = Math.floor(Math.random() * 100) + 1;
    const isCorrect =
      (comparison === COMPARISONS.under && number > resultNumber) ||
      (comparison === COMPARISONS.over && number < resultNumber);

    setResultNumber(resultNumber);
    addResult({
      time: new Date().toLocaleTimeString(),
      guess: `${capitalize(comparison)} ${number}`,
      result: resultNumber,
      isCorrect,
    });
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={320}
      marginTop={14}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <ResultWidget result={resultNumber} />
        <ComparisonSelector control={control} />
        <NumberSlider control={control} />
        <Button type="submit" fullWidth variant="contained" color="secondary">
          PLAY
        </Button>
      </form>
    </Box>
  );
}
