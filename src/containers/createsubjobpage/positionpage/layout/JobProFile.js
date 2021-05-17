import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
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
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import { FormLabel } from "@material-ui/core";
import * as CreateAction from "../../../../actions/CreateJob.action";

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(3),
  },
  paperJobfit: {
    height: 200,
    width: 600,
    backgroundColor: "#EFEFEF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    border: "1px solid #D2CBCB",
    textAlign: "center",
    margin: "auto",
    fontSize: 14,
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
  paperComp: {
    height: 200,
    width: 600,
    textAlign: "center",
    margin: "auto",
    fontSize: 16,
    marginTop: theme.spacing(2),
    marginLeft: 80,
  },
}));
export default function JobProFile() {
  const classes = useStyles();
  const [jobPeople, setJobPeople] = useState({
    JobLevel: " ",
    JobClassifield: " ",
    Exp: " ",
    ProjectNeed: " ",
  });

  const showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    touched,
    errors,
    handleBlur,
    handleReset,
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            style={{ textAlign: "center", padding: 20, margin: 20 }}
          >
            <h3
        style={{
          fontFamily: "Oswald",
          color: "#385a7c",
          fontWeight: "bold",
          textAlign: "center",
          margin:0,
          fontSize: 30,
        }}
      >
        Job Profile
      </h3>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={classes.paperPeople}>
              <Grid container>
                <Grid item xs={4} sm={4}>
                  <b>Job Level (JE) : </b>
                </Grid>
                <Grid item xs={8} sm={8} style={{ marginTop: -20 }}>
                  <TextField
                    id="JobLevel"
                    name="JobLevel"
                    value={values.JobLevel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: 30 }}>
                <Grid item xs={4} sm={4}>
                  <b>Job Classified : </b>
                </Grid>
                <Grid item xs={8} sm={8} style={{ marginTop: -20 }}>
                  <TextField
                    id="JobClassifield"
                    name="JobClassifield"
                    value={values.JobClassifield}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: 30 }}>
                <Grid item xs={4} sm={4}>
                  <b>Experience Need : </b>
                </Grid>
                <Grid item xs={8} sm={8} style={{ marginTop: -5 }}>
                  <FormControl>
                    <Input
                      style={{ width: "22ch" }}
                      endAdornment={
                        <InputAdornment position="end">Years</InputAdornment>
                      }
                      aria-describedby="standard-weight-helper-text"
                      inputProps={{
                        "aria-label": "years",
                      }}
                      id="Exp"
                      name="Exp"
                      value={values.Exp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText id="standard-weight-helper-text">
                      Year EXP
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid container style={{ marginTop: 30 }}>
                  <Grid item xs={4} sm={4}>
                    <b>Project Pass Need : </b>
                  </Grid>
                  <Grid item xs={8} sm={8} style={{ marginTop: -15 }}>
                    <TextField
                      id="ProjectNeed"
                      name="ProjectNeed"
                      value={values.ProjectNeed}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      label="Project pass"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </form>
    );
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
        initialValues={jobPeople}
      >
        {(props) => showForm(props)}
      </Formik>
    </div>
  );
}
