import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, "1/2/22", 24, "2/4/22"),
  createData("Frozen yoghurt", 159, "1/2/22", 24, "2/4/22"),
  createData("Frozen yoghurt", 159, "1/2/22", 24, "2/4/22"),
  createData("Frozen yoghurt", 159, "1/2/22", 24, "2/4/22"),
  createData("Frozen yoghurt", 159, "1/2/22", 24, "2/4/22"),
];

const HistoryofLoan = ({ history }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Bank Account</StyledTableCell>
              <StyledTableCell>Ammount</StyledTableCell>
              <StyledTableCell>Ammount Paid</StyledTableCell>
              <StyledTableCell>Reason</StyledTableCell>
              <StyledTableCell>Loan Get Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.bank_account}
                </StyledTableCell>
                <StyledTableCell>{row.amount}</StyledTableCell>
                <StyledTableCell>{row.amount_paid}</StyledTableCell>
                <StyledTableCell>{row.reason}</StyledTableCell>
                <StyledTableCell>{Date(row.date)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HistoryofLoan;
