import React, { forwardRef } from "react";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  CandidateCard: {
    background: "#ffff",
    border: 0,
    borderRadius: 2,
    width: "auto",
    margin: 0,
    marginBottom: 10,
    padding: 8,
    paddingBottom: 0,
    height: 140,
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
  },
  BG: {
    background: "#fff",
    color: "#385a7c",
    marginTop: 10,
  },
  name:{
    fontSize:"16px"
  }
}));

export default forwardRef(({ data, classValue }, ref) => {
  const classes = useStyles();

  return (
    // <div className={classes.CandidateCard}>

    <Grid
      style={{ display: "flex", flexDirection: "column" }}
      className={`item ${classValue}`}
      ref={ref}
    >
      <Grid>
        <p
        className={classes.name}
          style={{
            fontWeight: "bold",
            fontFamily: "Oswald",
            letterSpacing:"1px",
            textTransform: "uppercase",
          }}
        >
          {data.text}
        </p>
        <img
          src="https://sv1.picz.in.th/images/2021/02/21/oD229D.png"
          alt="oD229D.png"
          width="60"
          height="60"
        />
        <p
          style={{
            fontWeight: "normal",
            fontFamily: "Noto Sans",

          }}
        >
          Logistics System Analyst
        </p>
      </Grid>
      <Grid
        item
        container
        style={{
          textAlign: "center",
          justifyContent: "space-between",
          marginBottom:8,
        }}
      >
        <Grid item xs={3} sm={3}>
          <Box>PL</Box>
          <Box className={classes.BG}>S4</Box>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Box>Age</Box>
          <Box className={classes.BG}>22/3</Box>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Box>TIP</Box>
          <Box className={classes.BG}>1/0</Box>
        </Grid>
      </Grid>
    </Grid>
  );
});


