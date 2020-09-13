import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import AddIcon from "@material-ui/icons/Add";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LinearProgress from "@material-ui/core/LinearProgress";
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
    width: 150,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === "" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#26A69A",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(3),
  },
  paperJobfit: {
    height: "auto",
    width: 1200,
    marginTop: theme.spacing(3),
    border: "solid",
    margin: "auto",
    fontSize: 14,
    marginBottom: 20,
  },
  paperAttribute: {
    height: 349,
    width: 1000,
    marginTop: theme.spacing(5),

    textAlign: "center",
    margin: "auto",
    fontSize: 14,
  },
  paperPeople: {
    border: "1px solid #000000",
    padding: 30,
    height: "auto",
    width: 800,
    margin: "auto",
    fontSize: 16,
  },
  paperCompetency: {
    padding: 30,
    height: "auto",
    width: 900,
    margin: "auto",
    fontSize: 18,
  },
  paperJobProfile: {
    paddingBottom: 40,
    height: "auto",
    width: 1200,
    marginTop: theme.spacing(3),
    border: "solid",
    margin: "auto",
    fontSize: 16,
    marginBottom: 20,
  },
  paperBox: {
    paddingBottom: 40,
    height: 150,
    width: 600,
    marginTop: theme.spacing(3),
    border: "solid 1px",
    margin: "auto",
    fontSize: 14,
    marginTop: 20,
    marginBottom: 50,
  },
}));

export default function JobView() {
  const classes = useStyles();
  const CreateAttributeReducer = useSelector(
    ({ CreateAttributeReducer }) => CreateAttributeReducer
  );
  
  const CreateJobFitReducer = useSelector(
    ({ CreateJobFitReducer }) => CreateJobFitReducer
  );
  const CreateJobPeopleReducer = useSelector(
    ({ CreateJobPeopleReducer }) => CreateJobPeopleReducer
  );
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(() => {
        return Math.min(100), console.log();
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div style={{ backgroundColor: "#fff", padding: 20 }}>
      <div className={classes.paperJobfit}>
        <div style={{ textAlign: "center" }}>
          <h3>Job Fit</h3>
          <div className={classes.paperBox}>
            {CreateJobFitReducer.map((itemJobFit, index) => ({ itemJobFit }))}
          </div>
        </div>
      </div>
      <div className={classes.paperJobfit}>
        <div style={{ textAlign: "center", paddingBottom: 30 }}>
          <h3>Attribute</h3>
          <Grid container>
            {CreateAttributeReducer[0].Attribute.map((itemAttribute, index) => (
              <Grid
                item
                key={index}
                xs={6}
                sm={4}
                style={{ paddingLeft: 80, marginTop: 20 }}
              >
                <Grid container>
                  <Grid item xs={6} sm={6} style={{ textAlign: "left" }}>
                    {itemAttribute}
                  </Grid>
                  <Grid item xs={6} sm={6} style={{ marginLeft: -80 }}>
                    <BorderLinearProgress variant="determinate" value={30} />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      
        <div className={classes.paperJobProfile}>
          <div style={{ textAlign: "center" }}>
            <h3>Job Profile</h3>
            <div style={{ marginTop: 30 }}>
            {CreateJobPeopleReducer.map((itemJobPeople, index) => (
              <Grid container key={index}>
                <Grid item xs={12} sm={4}>
                  <span style={{ border: "1px solid #000000", padding: 20 }}>
                    Job Level :{itemJobPeople.JobLevel}
                  </span>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <span style={{ border: "1px solid #000000", padding: 20 }}>
                    Job Classified : {itemJobPeople.JobClassifield}
                  </span>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <span style={{ border: "1px solid #000000", padding: 20 }}>
                    Experience Need : {itemJobPeople.Exp} Years
                  </span>
                </Grid>
              </Grid>
               ))}
            </div>
          </div>
        </div>
     
      <div className={classes.paperJobfit}>
        <div style={{ textAlign: "center" }}>
          <h3>Project Pass Need</h3>

          <div className={classes.paperBox}></div>
        </div>
      </div>
    </div>
  );
}
