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
    width: 600,
    textAlign: "center",
    margin: "auto",
    fontSize: 16,
    marginTop: theme.spacing(2),
    marginLeft: 80,
  },
}));

export default function CompetencyJob(
  values,
  handleChange,
  handleSubmit,
  setFieldValue,
  isSubmitting,
  touched,
  errors,
  handleBlur,
  handleReset
) {
  const classes = useStyles();
  const [competency, setCompetency] = useState({
    first: " ",
    sec: " ",
    third: " ",
    forth: " ",
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
        <div className={classes.paperComp}>
          <Grid container style={{ marginTop: 25 }}>
            <Grid item xs={2} sm={2}>
              <b>1 : </b>
            </Grid>
            <Grid item xs={10} sm={10} style={{ marginTop: -15 }}>
              <TextField
                id="first"
                name="first"
                value={values.first}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                type="text"
                variant="outlined"
                
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 30 }}>
            <Grid item xs={2} sm={2}>
              <b>2 : </b>
            </Grid>
            <Grid item xs={10} sm={10} style={{ marginTop: -15 }}>
              <TextField
                id="sec"
                name="sec"
                value={values.sec}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                type="text"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 30 }}>
            <Grid item xs={2} sm={2}>
              <b>3 : </b>
            </Grid>
            <Grid item xs={10} sm={10} style={{ marginTop: -15 }}>
              <TextField
                id="third"
                name="third"
                value={values.third}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                type="text"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 30, paddingBottom: 50 }}>
            <Grid item xs={2} sm={2}>
              <b>4 : </b>
            </Grid>
            <Grid item xs={10} sm={10} style={{ marginTop: -15 }}>
              <TextField
                id="forth"
                name="forth"
                value={values.forth}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                type="text"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </div>
      </form>
    );
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Grid container className={classes.paperCompetency}>
        <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
          <span>
            <u>
              <h2>Competency Profile</h2>
            </u>
          </span>
        </Grid>
        <Formik
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
          initialValues={competency}
        >
          {(props) => showForm(props)}
        </Formik>
      </Grid>
    </div>
  );
}
