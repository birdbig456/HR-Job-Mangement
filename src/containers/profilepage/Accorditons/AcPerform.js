import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Block: {
    border: "solid 1px #e5e5e5",
    borderRadius: 15,
    height: 270,
    marginLeft: 5,
    marginRight: 5,
    color:"#385a7c"
  },
  Block2: {
    border: "solid 1px #e5e5e5",
    borderRadius: 15,
    height: 110,
    marginLeft: 5,
    marginRight: 5,
    color:"#efc566"
  },
}));

export default function AcPerform() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>
        <p>Perform 2020</p>
        <Grid
          className={classes.Block}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>A+</h1>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>
        <p>Perform 2019</p>
        <Grid
          className={classes.Block}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>B+</h1>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>
        <p>Perform 2018</p>
        <Grid
          className={classes.Block}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>B+</h1>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>
        <p>Potential 2020</p>
        <Grid
          className={classes.Block2}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>HP</h1>
        </Grid>
        <p>Potential 2019</p>
        <Grid
          className={classes.Block2}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>N</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}
