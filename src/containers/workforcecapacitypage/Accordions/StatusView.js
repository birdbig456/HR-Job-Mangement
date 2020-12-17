import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  Block: {
    backgroundColor: "#26A69A",
    fontSize: 16,
    padding: 10,
    border: 0,
    borderRadius: 5,
    color: "#fff",
  },
  Topic:{
    color:"#36a69a",
    fontSize:16,
    fontWeight:"bolder",
  }
}));

export default function StatusView() {
  const classes = useStyles();
  return (
    <Grid
      item
      style={{
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <label className={classes.Topic}>Division</label>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <p>Sale Marketing Seat</p>
        <p>300</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <label className={classes.Topic}>Department / Section</label>
      </div>
      <div style={{ marginBottom: 20, marginTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>In country Sale Marketing Seat</p>
          <p>150</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>International Sale Marketing Seat</p>
          <p>150</p>
        </div>
        
      </div>

      <div style={{ textAlign: "center" }}>
        <label className={classes.Topic}>Production</label>
      </div>
      <div style={{ marginBottom: 20, marginTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Chiang Mai Sell Marketing Seat</p>
          <p>70</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Bangkok Sell Marketing Seat</p>
          <p>80</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Europe Sell Marketing Seat</p>
          <p>70</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>North America Sell Marketing Seat</p>
          <p>80</p>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <p className={classes.Topic}>Total workforce seat : </p>
        <h2 style={{color:"#ff3019"}}>300</h2>
      </div>
    </Grid>
  );
}
