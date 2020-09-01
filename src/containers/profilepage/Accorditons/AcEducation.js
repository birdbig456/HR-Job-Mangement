import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
levelBlock:{
    border:"solid 1px #e5e5e5",
    borderRadius:15,
    height:150,
}

}))

export default function AcEducation() {
    const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} style={{marginTop:40}}>
        <div className={classes.levelBlock}>Level 1</div>
      </Grid>
      <Grid item xs={12} sm={12} style={{marginTop:40}}>
        <div className={classes.levelBlock}>Level 2</div>
      </Grid>
      <Grid item xs={12} sm={12} style={{marginTop:40}}>
        <div className={classes.levelBlock}>Level 3</div>
      </Grid>
    </Grid>
  );
}
