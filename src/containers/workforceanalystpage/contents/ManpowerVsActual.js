import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    Block: {
      border: "solid 3px #e5e5e5",
      borderRadius: 5,
      marginRight:40,
      marginLeft:40,
      marginBottom: 40,
      height:200
    },
  }));
  
export default function ManpowerVsActual() {
    const classes = useStyles();
    return (
      <Grid container >
      <p style={{marginLeft:40,fontSize:16,color:"#FF3019"}}>Man Power VS Actual</p>
     <Grid container className={classes.Block} >
        <Grid xs={6} sm={6} style={{textAlign:"center"}}>
          <p>Man Power</p>
        </Grid>
        <Grid xs={6} sm={6} style={{textAlign:"center"}}>
          <p>Actual</p>
        </Grid>
     </Grid>
    </Grid>
    )
}
