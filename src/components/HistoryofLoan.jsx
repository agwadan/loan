import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159,'1/2/22', 24, "2/4/22"),
    createData('Frozen yoghurt', 159,'1/2/22', 24, "2/4/22"),
    createData('Frozen yoghurt', 159,'1/2/22', 24, "2/4/22"),
    createData('Frozen yoghurt', 159,'1/2/22', 24, "2/4/22"),
    createData('Frozen yoghurt', 159,'1/2/22', 24, "2/4/22"),

];


const HistoryofLoan = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Bank Name</StyledTableCell>
                            <StyledTableCell>Ammount</StyledTableCell>
                            <StyledTableCell>Loan Get</StyledTableCell>
                            <StyledTableCell>Paid Loan Ammount</StyledTableCell>
                            <StyledTableCell>Loan paid Ammount</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell >{row.calories}</StyledTableCell>
                                <StyledTableCell >{row.fat}</StyledTableCell>
                                <StyledTableCell >{row.carbs}</StyledTableCell>
                                <StyledTableCell >{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default HistoryofLoan
