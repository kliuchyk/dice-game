import { PreviousResult } from "@/app/types";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { tableContainerStyles, tableStyles } from "./styles";

interface PreviousResultsProps {
  results: PreviousResult[];
}

export function PreviousResults({ results }: PreviousResultsProps) {
  return (
    <TableContainer sx={tableContainerStyles}>
      <Table aria-label="results table" sx={tableStyles}>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Guess</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row) => (
            <TableRow key={`${row.time}-${row.result}`}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.guess}</TableCell>
              <TableCell sx={{ color: row.isCorrect ? "green" : "red" }}>
                {row.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
