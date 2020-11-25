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
      width:600,
      marginLeft:5,
      marginRight:5,
      boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.1)"
    },
  }));
  

export default function JobDepartment() {
    const classes = useStyles();
    return (
        <div style={{ backgroundColor: "#FAFAFA", padding: 20 }}>
        <Grid container >
            <Grid item xs={12} sm={12} style={{textAlign:"center",marginBottom:25}}>
                <h3 style={{fontSize:28,color: "#385A7C",fontFamily:"Oswald"}}>Workforce Analytic Job & Department Level</h3>
            </Grid>
            <Grid item xs={12} sm={9} >
                <PyramidJob/>
            </Grid>
            <Grid item xs={12} sm={3}>
                    <EmployeeInfo/>
                    <TotalAmount/>

            </Grid>

        </Grid>
        </div>
    )
}
