import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

function createData(time: string, guess: string, result: number) {
  return { time, guess, result };
}

const rows = [
  createData("11:46:32", "Over 13", 24),
  createData("11:46:32", "Under 23", 37),
  createData("11:46:32", "Over 57", 24),
];

export function PreviousResults() {
  return (
    <TableContainer sx={{ width: "600px", mt: "24px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="results table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Guess</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.time}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.guess}</TableCell>
              <TableCell>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
