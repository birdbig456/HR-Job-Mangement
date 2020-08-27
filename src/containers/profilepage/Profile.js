import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NavigationIcon from "@material-ui/icons/Navigation";
import IconButton from "@material-ui/core/IconButton";
import AcJob from "./Accorditons/AcJob";
import AcAttribute from "./Accorditons/AcAttribute";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  marginPaper: {
    margin: "auto",
  },
  paperTop: {
    margin: "auto",
    marginTop: 20,
  },
  paperAccord: {
    margin: "auto",
    marginLeft: 20,
    marginTop: 20,
  },
  paperInFor: {
    margin: "auto",

    marginTop: 20,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={3}>
          {/*ส่วนของ profile picture */}
          <div style={{margin:10}}>
            <Paper className={classes.paperTop}>aaa</Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          {/*ส่วนของ main infomation */}
          <Paper className={classes.paperInFor}>aaaa</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <div style={{ marginTop: 20 }}>
            <Accordion style={{ marginTop: 10 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AcAttribute/>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ marginTop: 10 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <AcJob />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
