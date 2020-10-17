import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PyramidJob from "./contents/PyramidJob";
import EmployeeInfo from "./contents/EmployeeInfo";
import TotalAmount from "./contents/TotalAmount";

const useStyles = makeStyles((theme) => ({
    Block: {
      background:"#ffff",
      border: "solid 1px #e5e5e5",
      borderRadius: 5,
      height: "auto",
      marginLeft:5,
      marginRight:5,
      boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.1)"
    },
  }));
  

export default function JobDepartment() {
    const classes = useStyles();
    return (
        <Grid container >
            <Grid item xs={12} sm={12} style={{textAlign:"center",marginBottom:25}}>
                <h3 style={{fontSize:20,color: "#385A7C"}}>Workforce Analytic Job & Department Level</h3>
            </Grid>
            <Grid item xs={12} sm={9} >
                <div className={classes.Block} style={{textAlign:"center"}}>
                    <PyramidJob/>
                </div>
            </Grid>
            <Grid item xs={12} sm={3}>
                    <EmployeeInfo/>
                    <TotalAmount/>

            </Grid>

        </Grid>
    )
}
