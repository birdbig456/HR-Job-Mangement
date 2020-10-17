import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  Block: {
    background: "#ffff",
    border: "solid 1px #e5e5e5",
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
  },
}));

export default function EmployeeInfo() {
  const classes = useStyles();
  return (
    
        <Grid
        className={classes.Block}
        style={{ textAlign: "left", lineHeight: 4, height:"70%"}}
      >
        <Grid style={{ margin: 25 }}>
          <div style={{ marginLeft: 20 }}>Name : </div>
          <div style={{ marginLeft: 20 }}>Job : </div>
          <div style={{ marginLeft: 20 }}>Job Position : </div>
          <div style={{ marginLeft: 20 }}>
            <Grid container>
              <Grid item xs={6} sm={6}>
                <div style={{}}>ESY : </div>
                <div style={{}}>Service : </div>
              </Grid>
              <Grid item xs={6} sm={6}>
                <div style={{}}>TIG : </div>
                <div style={{}}>Age : </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ marginLeft: 20 }}>Performance : </div>
          <div style={{ marginLeft: 20 }}>Potential : </div>
        </Grid>
      </Grid>

  );
}
