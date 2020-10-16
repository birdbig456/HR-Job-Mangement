import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  LeftBlock: {
    background:"#ffff",
    border: "0px",
    borderRadius: 5,
    marginLeft: 40,
    marginBottom: 40,
    height: 160,
    boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)",
  },
  RightBlock:{
    background:"#ffff",
    border: "0px",  
    borderRadius: 5,
    marginRight: 40,
    marginBottom: 40,
    height: 160,
    boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)",
  }
}));

export default function BudgetVsLabour() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={5} sm={5}>
        <p style={{ marginLeft: 40, fontSize: 16, color: "#ff3019" ,fontWeight:"bolder"}}>
          Budget
        </p>
        <div className={classes.LeftBlock}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{ marginTop: 60 ,color:"#FEC566"}}>202,000,000</h2>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 25,
              color:"#FEC566"
            }}
          >
            <h3>Baht</h3>
          </Box>
        </div>
      </Grid>
      <Grid
      item
        xs={2}
        sm={2}
        style={{
          marginTop: 20,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          color:"#ff3019"
        }}
      >
        <h4>VS</h4>
      </Grid>
      <Grid item xs={5} sm={5}>
        <p style={{ fontSize: 16, color: "#ff3019" ,fontWeight:"bolder"}}>Labour Cost</p>
        <div className={classes.RightBlock}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{ marginTop: 60 ,color:"#FEC566"}}>249,000,000</h2>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 25,
              color:"#FEC566"
            }}
          >
            <h3>Baht</h3>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
