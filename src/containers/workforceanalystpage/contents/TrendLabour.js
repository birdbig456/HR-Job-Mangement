import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
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
    height: "auto",
    boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)",
  },
}));
export default function TrendLabour() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Amount (person) / Month",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#385A7C)",
        borderColor: "#385a7c",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#385A7C",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#385A7C",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 23, 81, 56, 55, 40,80,75,33,55,60,41,0],
      },
    ],
  };
  const classes = useStyles();
  return (
    <Grid container>
      <p style={{ marginLeft: 40, fontSize: 20, color: "#13b5ea" ,fontWeight:"bolder",fontFamily:"Oswald",}}>
        Trend Labour
      </p>
      <Grid
        item
        xs={12}
        sm={12}
        className={classes.Block}
        style={{ textAlign: "center" }}
      >
        <Line data={data} />
      </Grid>
    </Grid>
  );
}