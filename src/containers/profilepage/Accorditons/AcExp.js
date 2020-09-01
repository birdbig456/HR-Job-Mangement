import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#26A69A",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Id,Date, Position, Department, Company, Country) {
  return {Id, Date, Position, Department, Company, Country };
}

const rows = [
  createData(1,'01/04/42', 'HR Manager', 'HR Department', 'TPE', 'Rayong'),
  createData(2,'05/11/46', 'HR Manager', 'HR Department', 'SCG', 'Bangkok'),
  createData(3,'02/07/49', 'HR Manager', 'HR Department', 'SCG', 'Bangkok'),
  createData(4,'24/09/54', 'HR Manager', 'HR Department', 'TPE', 'Rayong'),
  createData(5,'30/01/63', 'HR Manager', 'HR Department', 'TPE', 'Rayong'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AcExp() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell >Position</StyledTableCell>
            <StyledTableCell >Department</StyledTableCell>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell >Country</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Id}>
              <StyledTableCell component="th" scope="row">
                {row.Date}
              </StyledTableCell>
              <StyledTableCell>{row.Position}</StyledTableCell>
              <StyledTableCell>{row.Department}</StyledTableCell>
              <StyledTableCell >{row.Company}</StyledTableCell>
              <StyledTableCell >{row.Country}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}