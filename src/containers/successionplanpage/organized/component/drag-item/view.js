import React, { forwardRef } from "react";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
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
      <Grid  >
        <p
          style={{
            fontWeight: "bold",
            fontFamily: "Noto Sans",
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
        <p >Logistics System Analyst</p>
      </Grid>
      <Grid item container style={{ textAlign: "center",justifyContent:"space-between"}}>
        <Grid item  xs={3} sm={3} >
          <Box>PL</Box>
          <Box>S4</Box>
        </Grid>
        <Grid item  xs={3} sm={3} >
          <Box>Age</Box>
          <Box>22/3</Box>
        </Grid>
        <Grid item  xs={3} sm={3} >
          <Box>T/P</Box>
          <Box>1/0</Box>
        </Grid>
      </Grid>
    </Grid>
  );
});

{
  /* <div className={classes.root}>
<Paper className={classes.paper}>
  <Grid container spacing={2}>
    <Grid item>
      <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
      </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1">
            Standard license
          </Typography>
          <Typography variant="body2" gutterBottom>
            Full resolution 1920x1080 • JPEG
          </Typography>
          <Typography variant="body2" color="textSecondary">
            ID: 1030114
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" style={{ cursor: 'pointer' }}>
            Remove
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">$19.00</Typography>
      </Grid>
    </Grid>
  </Grid>
</Paper>
</div> */
}
