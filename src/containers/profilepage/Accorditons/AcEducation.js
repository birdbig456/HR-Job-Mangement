import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  levelBlock: {
    border: "solid 1px #e5e5e5",
    borderRadius: 15,
    height: 250,
    marginLeft: 5,
    marginRight: 5,
  },
}));

export default function AcEducation() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={4} sm={4}>
        <p style={{ marginLeft: 10 }}>Level 1</p>
        <div className={classes.levelBlock} style={{ textAlign: "center" }}>
          <p >Bachelor Degree</p>
          <p>2002 - 2006</p>
          <p>Political Science</p>
          <p>Major Human resource</p>
          <p>Thammasart University</p>
          <p>Thailand</p>
        </div>
      </Grid>
      <Grid item xs={4} sm={4}>
        <p style={{ marginLeft: 10 }}>Level 2</p>
        <div className={classes.levelBlock} style={{ textAlign: "center" }}>
          <p>Master Degree</p>
          <p>2007 - 2009</p>
          <p>MBA</p>
          <p>Major Financial</p>
          <p>Stanford University</p>
          <p>USA.</p>
        </div>
      </Grid>
      <Grid item xs={4} sm={4}>
        <p style={{ marginLeft: 10 }}>Level 3</p>
        <div
          className={classes.levelBlock}
          style={{ textAlign: "center" }}
        ></div>
      </Grid>
      {/* <Grid item xs={4} sm={4} style={{marginTop:10}}>
        <div className={classes.levelBlock}>Level 1</div>
      </Grid>
      <Grid item xs={4} sm={4} style={{marginTop:10}}>
        <div className={classes.levelBlock}>Level 2</div>
      </Grid>
      <Grid item xs={4} sm={4} style={{marginTop:10}}>
        <div className={classes.levelBlock}>Level 3</div>
      </Grid> */}
    </Grid>
  );
}
