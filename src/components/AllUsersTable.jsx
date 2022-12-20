import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

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
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function AllUsersTable({ users }) {
  /* const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://superloan.onrender.com/api/auth/admin/getallusers")
      .then(function (response) {
        setUser(response.data.data.data);
        console.log(users);
      });
  }, []); */
  console.log(users);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            {/* <StyledTableCell>Phone</StyledTableCell> */}
            <StyledTableCell>DOB</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
            {/* <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>Ocupation</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.firstname} {row.lastname}
              </StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              {/*   <StyledTableCell>{row?.phone}</StyledTableCell> */}
              <StyledTableCell>{row.dob}</StyledTableCell>
              <StyledTableCell>
                <button>View Loan History</button>
              </StyledTableCell>
              {/*   <StyledTableCell>{row.gender}</StyledTableCell>
              <StyledTableCell>{row.occupation}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
