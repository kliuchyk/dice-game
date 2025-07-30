"use client";

import { Box, Button } from "@mui/material";
import { NumberSlider } from "../Slider";
import { ComparisonSelector } from "../ComparisonSelector";
import { ResultWidget } from "../ResultWidget";
import { useForm } from "react-hook-form";
import { COMPARISONS } from "@/app/constants";
import { BoardInputs } from "./types";

export function Board() {
  const { control, handleSubmit } = useForm<BoardInputs>({
    defaultValues: {
      number: 10,
      comparison: COMPARISONS.under,
    },
  });

  function onSubmit(values: BoardInputs) {
    console.log("Values:", values);
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
        <ResultWidget result={100} />
        <ComparisonSelector control={control} />
        <NumberSlider control={control} />
        <Button type="submit" fullWidth variant="contained" color="secondary">
          PLAY
        </Button>
      </form>
    </Box>
  );
}
