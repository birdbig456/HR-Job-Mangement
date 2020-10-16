import React, { useState, useEffect } from "react";
import { Scatter } from "react-chartjs-2";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  Block: {
    background:"#ffff",
    border: "solid 1px #e5e5e5",
    borderRadius: 5,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 40,
    height: "auto",
    boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.1)",
  },
}));

export default function ScatterChart() {
  const [chartData, setChartData] = useState({});
  const data = {
    labels: ['Scatter'],
    datasets: [
      {
        label: 'My First dataset',
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.6)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: '#FF3019',
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: [
          { x: 65, y: 75 },
          { x: 59, y: 49 },
          { x: 80, y: 90 },
          { x: 81, y: 29 },
          { x: 56, y: 36 },
          { x: 55, y: 25 },
          { x: 40, y: 18 },
          { x: 73, y: 43 },
          { x: 72, y: 42 },
          { x: 71, y: 85 },
          { x: 55, y: 88 },
          { x: 66, y: 74 },
          { x: 77, y: 63 },
          { x: 22, y: 36 },
        ]
      }
    ]
  };
  
  const classes = useStyles();
  return (
    <Grid container>
      <p style={{ marginLeft: 40, fontSize: 16, color: "#FF3019" }}>
        Scatter Age / Level
      </p>
      <Grid
        item
        xs={12}
        sm={12}
        className={classes.Block}
        style={{ textAlign: "center" }}
      >
        <Scatter data={data} />
      </Grid>
    </Grid>
  );
}
