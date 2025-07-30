import { COMPARISONS } from "@/app/constants";
import { BoardInputs } from "../Board/types";
import { ComparisonSelector } from "./ComparisonSelector";
import { NumberSlider } from "./Slider";
import { AlertInfo, PreviousResult } from "@/app/types";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, capitalize } from "@mui/material";

interface GameFormProps {
  setAlert: Dispatch<SetStateAction<AlertInfo | null>>;
  setResultNumber: Dispatch<SetStateAction<number | null>>;
  addResult: (result: PreviousResult) => void;
}

export function GameForm({
  setAlert,
  setResultNumber,
  addResult,
}: GameFormProps) {
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
    const comparisonText =
      comparison === COMPARISONS.under ? COMPARISONS.under : COMPARISONS.over;

    setResultNumber(generated);

    addResult({
      time: new Date().toLocaleTimeString(),
      guess: `${capitalize(comparison)} ${number}`,
      result: generated,
      isCorrect,
    });

    setAlert({
      type: isCorrect ? "success" : "error",
      comparison: comparisonText,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={320}
      >
        <ComparisonSelector control={control} />
        <NumberSlider control={control} />
        <Button type="submit" fullWidth variant="contained" color="secondary">
          PLAY
        </Button>
      </Box>
    </form>
  );
}
