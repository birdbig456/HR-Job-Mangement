import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  Block: {
    background:"#ffff",
    border: "solid 3px #e5e5e5",
    borderRadius: 5,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 40,
    height: "auto",
  },
}));

export default function TrendLabour() {
  const data = {
    labels: ["January", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 23, 81, 56, 55, 40,80,75,33,55,16,41,0],
      },
    ],
  };
  const classes = useStyles();
  return (
    <Grid container>
      <p style={{ marginLeft: 40, fontSize: 16, color: "#FF3019" }}>
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
