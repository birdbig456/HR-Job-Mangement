import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    Block: {
      background: "#ffff",
      border: "solid 1px #e5e5e5",
      borderRadius: 5,
      marginLeft: 5,
      marginRight: 5,
      boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
    },
  }));

export default function TotalAmount() {
    const classes = useStyles();
    return (
        <Grid className={classes.Block} style={{height:"30%"}} >
        <Grid style={{ margin: 25 }}>
          <div style={{ marginLeft: 20 }}>Total Amount : </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
                marginTop:20,
                marginBottom:20,
                color:"#36a69a"
            }}
          >
              <h1>500</h1>
          </div>
        </Grid>
      </Grid>
    )
}
