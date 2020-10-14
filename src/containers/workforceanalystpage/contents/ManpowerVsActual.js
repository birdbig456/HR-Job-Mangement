import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  Block: {
    border: "solid 3px #e5e5e5",
    borderRadius: 5,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 40,
    height: 405,
  },
}));

export default function ManpowerVsActual() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40,0]
      }
    ]
  };
  const classes = useStyles();
  return (
    <Grid container>
      <p style={{ marginLeft: 40, fontSize: 16, color: "#FF3019" }}>
        Man Power VS Actual
      </p>
      <Grid container className={classes.Block}>
      
      </Grid>
    </Grid>
  );
}
