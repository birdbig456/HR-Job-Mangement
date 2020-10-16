import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PyramidJob from "./contents/PyramidJob";

const useStyles = makeStyles((theme) => ({
    Block: {
      background:"#ffff",
      border: "solid 1px #e5e5e5",
      borderRadius: 5,
      height: "auto",
      marginLeft:5,
      marginRight:5,
      boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.1)"
    },
  }));
  

export default function JobDepartment() {
    const classes = useStyles();
    return (
        <Grid container >
            <Grid item xs={12} sm={12} style={{textAlign:"center"}}>
                <h3 style={{fontSize:20,color: "#385A7C"}}>Workforce Analytic Job & Department Level</h3>
            </Grid>
            <Grid item xs={9} sm={9}>
                <div className={classes.Block} style={{textAlign:"center"}}>
                    <PyramidJob/>
                </div>
            </Grid>
            <Grid item xs={3} sm={3}>
            <div className={classes.Block} style={{textAlign:"left",lineHeight:3}}>
            <Grid style={{margin:25}}>
                    <div style={{marginLeft:20}}>Name : </div>
                    <div style={{marginLeft:20}}>Job : </div>
                    <div style={{marginLeft:20}}>Job Position : </div>
                    <div style={{marginLeft:20}}>
                <Grid container >
                      <Grid item xs={6} sm={6}>
                        <div style={{}}>ESY : </div>
                        <div style={{}}>Service : </div>
                    </Grid>
                  <Grid item xs={6} sm={6}>
                  <div style={{}}>TIG : </div>
                  <div style={{}}>Age : </div>
                  </Grid>
                 </Grid>
                    </div>
                    <div style={{marginLeft:20}}>Performance : </div>
                    <div style={{marginLeft:20}}>Potential : </div>
                    </Grid>
            </div>
            </Grid>

        </Grid>
    )
}
