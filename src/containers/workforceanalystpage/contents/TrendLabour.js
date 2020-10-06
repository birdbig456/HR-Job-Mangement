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
  
export default function TrendLabour() {
    const classes = useStyles();
    return (
        <Grid container >
            <p style={{marginLeft:40,fontSize:16,color:"#FF3019"}}>Trend Labour</p>
         <Grid xs={12} sm={12} className={classes.Block} style={{textAlign:"center"}}>Trend Graph</Grid>
        </Grid>
    )
}
