import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({}));

export default function formInfo() {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <Grid container>
        <Grid item sm={12} xs={12} style={{ marginBottom: 5 }}>
          <h3
            style={{
              fontSize: 28,
              color: "#385A7C",
              fontFamily: "Oswald",
              marginTop: 0,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Form Infomation
          </h3>
        </Grid>
        <div>Hello! This is Form Infomation page. you can edit this page name at anytime! </div>
      </Grid>
    </div>
  );
}
