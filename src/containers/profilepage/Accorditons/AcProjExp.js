import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#13b5ea",
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

function createData(Number,ProjectName,Period,Value,Role,Detail) {
    return {Number,ProjectName,Period,Value,Role,Detail};
  }

const rows = [
    createData(1,"ProjectName","6 months","Value","Role","Detail"),
    createData(2,"ProjectName","6 months","Value","Role","Detail"),
    createData(3,"ProjectName","6 months","Value","Role","Detail"),
    createData(4,"ProjectName","6 months","Value","Role","Detail"),
    createData(5,"ProjectName","6 months","Value","Role","Detail"),
]

const useStyles = makeStyles({
    table : {
        minwidth:700,
    },
});



export default function AcProjExp() {

    const classes = useStyles()
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Number</StyledTableCell>
                        <StyledTableCell>ProjectName</StyledTableCell>
                        <StyledTableCell>Period</StyledTableCell>
                        <StyledTableCell>Value</StyledTableCell>
                        <StyledTableCell>Role</StyledTableCell>
                        <StyledTableCell>Detail</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <StyledTableRow key={row.Number}>
                            <StyledTableCell >
                          {row.Number}
                        </StyledTableCell>
                        <StyledTableCell >
                          {row.ProjectName}
                        </StyledTableCell>
                        <StyledTableCell>{row.Period}</StyledTableCell>
                        <StyledTableCell>{row.Value}</StyledTableCell>
                        <StyledTableCell >{row.Role}</StyledTableCell>
                        <StyledTableCell >{row.Detail}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

