import React, { Component } from "react";
import { Line, Pie, HorizontalBar } from "react-chartjs-2";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  Block: {
    background:"#ffff",
    border: "solid 1px #E5E5E5",
    borderRadius: 5,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 40,
    height: 405,
    boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)",
  },
}));
function ManpowerVsActual() {
const optionsBar = {
  scales: {
    xAxes: [
      {
        stacked: false,
        ticks: {
          beginAtZero: true,
          callback: (v) => {
            return v < 0 ? -v : v;
          },
        },
      },
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        position: "left",
      }
    ],
  }
}
let dataBar ={ 
  datasets: [
    {
      label: "Best fit",
      stack: "Stack 0",
      backgroundColor: "#fec566",
      data: [10, 20, 30, 40, 50, 60],
    },
    {
      label: "Actual",
      stack: "Stack 0",
      backgroundColor: "#e5e5e5",
      data: [10, 15, 30, 60, 50,40].map((k) => -k),
    },
  ],
   labels: ["Division 1", "Division 2", "Division 3", "Division 4", "Division 5", "Division 6", ""],
}
  const classes = useStyles();
  return (
    <Grid container>
      <p style={{ marginLeft: 40, fontSize: 20, color: "#13b5ea" ,fontWeight:"bolder",fontFamily:"OSwald"}}>
        Man Power VS Actual
      </p>
      <Grid container className={classes.Block}>
      ⠀⠀⠀
      <HorizontalBar   data={dataBar} options={optionsBar} />
      </Grid>
    </Grid>
  );
}
export default ManpowerVsActual;