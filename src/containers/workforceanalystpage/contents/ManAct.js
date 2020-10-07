import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  LeftBlock: {
    border: "solid 3px #26A69A",
    borderRadius: 5,
    marginLeft: 40,
    marginBottom: 40,
    height: 160,
  },
  RightBlock:{
    border: "solid 3px #26A69A",  
    borderRadius: 5,
    marginRight: 40,
    marginBottom: 40,
    height: 160,
  }
}));

export default function ManAct() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={5} sm={5}>
        <p style={{ marginLeft: 40, fontSize: 16, color: "#FF3019" }}>
          Man Power
        </p>
        <div className={classes.LeftBlock}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{ marginTop: 60 ,color:"#26A69A"}}>500</h2>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 25,
              color:"#26A69A"
            }}
          >
            <h3>คน</h3>
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
          color:"#385A7C"
        }}
      >
        <h4>VS</h4>
      </Grid>
      <Grid item xs={5} sm={5}>
        <p style={{ fontSize: 16, color: "#FF3019" }}>Actual</p>
        <div className={classes.RightBlock}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{ marginTop: 60 ,color:"#26A69A"}}>516</h2>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 25,
              color:"#26A69A"
            }}
          >
            <h3>คน</h3>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
