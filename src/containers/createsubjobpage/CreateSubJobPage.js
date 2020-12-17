import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import * as CreateAction from "../../actions/CreateJob.action";
import PositionPage from "./positionpage/PositionPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import { purple } from "@material-ui/core/colors";
import LinearProgress from "@material-ui/core/LinearProgress";
const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:"",
  },
  bar: {
    borderRadius: 15,
    background: "#385A7C",
  },
}))(LinearProgress);
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    height: 40,
    background: "#FF3019",
    marginRight: 20,
    "&:hover": {
      background: "#FF4F3C",
    },
  },
}))(Button);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(3),
  },
  paperCreate: {
    height: 134,
    width: 120,
    backgroundColor: "#5A5C4F",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    border: "1px solid #D2CBCB",
    textAlign: "center",
    fontSize: 14,
  },
  paper: {
    height: "auto",
    width: 300,
    backgroundColor: "#ff3019",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    border: "1px solid #D2CBCB",
    textAlign: "center",
    fontSize: 20,
    color: "white",
    margin: "auto",
  },
  paperposition: {
    margin: "auto",
    height: 45,
    width: 265,
    backgroundColor: "#FFFCFC",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    border: "1px solid #D2CBCB",
    textAlign: "center",
    fontSize: 14,
  },
  avatarCreate: {
    width: 60,
    height: 60,
    margin: "auto",
    marginTop: theme.spacing(3),
    backgroundColor: green[500],
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
    marginTop: theme.spacing(3),
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
  },
  paperJob: {
    margin: "auto",
    marginBottom: 40,
    width: 360,
    height: "auto",
    background: "#f3f6fc",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1);",
    border: "0px",
  },
  marginAt: {
    margin: theme.spacing(3),
  },
  avatarPosition: {
    width: 35,
    height: 35,
    margin: "auto",
    marginLeft: 5,
    marginTop: 5,
  },
  control: {
    padding: theme.spacing(2),
  },
  input: {
    display: "none",
  },
  white: {
    backgroundColor: "#F9FBF9",
    width: 60,
    height: 60,
    margin: "auto",
    fontSize: 40,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    border: "1px solid #D2CBCB",
  },
  SemiTopic: {
    marginTop: theme.spacing(5),
    fontSize: 14,
  },
  subjobname: {
    color: "#453F3F",
    fontSize: 18,
  },
  namePosition: {
    marginTop: 9,
    fontSize: 16,
  },
  avatarInPut: {
    width: 150,
    height: 190,
    margin: theme.spacing(0),
    backgroundColor: "#fafafa",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1);",
  },
}));

export default function CreateSubJobPage({ match }) {
  const CreateJobReducer = useSelector(
    ({ CreateJobReducer }) => CreateJobReducer
  );
  const CreateSubJobReducer = useSelector(
    ({ CreateSubJobReducer }) => CreateSubJobReducer
  );
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
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
  const [isShow, setIsShow] = useState(false);

  const [open, setOpen] = React.useState(false);

  const [newSubJob, setNewSubJob] = useState({
    ParentJobName: "",
    NameSubJob: "",
    preview: "",
    raw: "",
  });

  let CurrentJob = CreateJobReducer[0];

  console.log(CreateJobReducer);
  //console.log(CurrentJob.NameJob)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickToPosition = (itemSubJob, item) => {
    history.push(`/${item.NameJob}/${itemSubJob.NameSubJob}`);
  };

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
    const handleChangeImg = (e) => {
      if (e.target.files.length) {
        setNewSubJob({
          ...newSubJob,
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0].name,
        });
        //values.preview = URL.createObjectURL(e.target.files[0]);
      }
    };
    return (
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
            <Paper
              className={classes.avatarInPut}
              style={{
                margin: "auto",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                id="file"
                name="file"
                type="file"
                onChange={handleChangeImg}
                value={values.preview}
                className={classes.input}
              />
              <label htmlFor="file">
                {newSubJob.preview ? (
                  <img src={newSubJob.preview} width="100%" height="100%" />
                ) : (
                  <>
                    <IconButton
                      className={classes.white}
                      className={classes.palette}
                      aria-label="upload picture"
                      component="span"
                      style={{ color: "#FF3019" }}
                    >
                      <PhotoCamera />
                    </IconButton>
                  </>
                )}
              </label>
            </Paper>
          </Grid>
          <Grid container style={{ marginTop: 30 }}>
            <Grid item xs={12} sm={5}>
              <TextField disabled label="Name SubJob :" />
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                required
                className={classes.palette}
                color="primary"
                label="Enter SubJob Name"
                fullWidth
                id="NameSubJob"
                name="NameSubJob"
                value={values.NameSubJob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
          </Grid>
        </Grid>
        <div style={{ display: "flex", justifyContent: "center", margin: 25 }}>
          <Button
            type="submit"
            className={classes.palette}
            color="primary"
            variant="contained"
            size="small"
            style={{ margin: 7, background: "#FF3019", color: "#ffffff" }}
          >
            Save
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            size="small"
            style={{ margin: 7 }}
          >
            Cancel
          </Button>
        </div>
      </form>
    );
  };

  const {
    params: {},
  } = match;
  return (
    <div>
      {CreateJobReducer != null ? (
        <div>
          {CreateJobReducer.JobFamily.map((item, index) => {
            return match.params.JobName == item.NameJob ? (
              <div key={index}>
                <Grid container className={classes.root}>
                  <Grid item xs={12} sm={12}>
                    <Grid container>
                      <Grid key={index} item xs={12} sm={12}>
                        <div
                          style={{
                            borderBottom: "1px Solid #385A7C",
                            marginRight: 30,
                          }}
                        >
                          <Paper className={classes.paperJob} type="button">
                            <div
                              style={{
                                color: "#FF3019",
                                textAlign: "center",
                                fontSize: 20,
                                fontWeight: "bold",
                                paddingTop: 30,
                                fontFamily: "Oswald",
                              }}
                            >
                              {item.NameJob}
                            </div>
                            <Grid container>
                              <Grid
                                item
                                xs={6}
                                sm={6}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Paper
                                  className={classes.avatarInPut}
                                  style={{
                                    marginTop: 10,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0,
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                  }}
                                >
                                  <img src={item.preview} />
                                </Paper>
                              </Grid>
                              <Grid item xs={6} sm={6}>
                                <div
                                  className={classes.marginAt}
                                  style={{
                                    lineHeight: "2",
                                    fontWeight: "bold",
                                    fontFamily: "Open Sans Condensed",
                                  }}
                                >
                                  <div>
                                    <div
                                      style={{ fontSize: 16, color: "000000" }}
                                    >
                                      <label>Attribute 1</label>
                                    </div>
                                    <BorderLinearProgress
                                      variant="determinate"
                                      value={75}
                                    />
                                  </div>
                                  <div>
                                    <div
                                      style={{ fontSize: 16, color: "000000" }}
                                    >
                                      <label>Attribute 2</label>
                                    </div>
                                    <BorderLinearProgress
                                      variant="determinate"
                                      value={90}
                                    />
                                  </div>
                                  <div>
                                    <div
                                      style={{ fontSize: 16, color: "000000" }}
                                    >
                                      <label>Attribute 3</label>
                                    </div>
                                    <BorderLinearProgress
                                      variant="determinate"
                                      value={40}
                                    />
                                  </div>
                                  <div>
                                    <div
                                      style={{ fontSize: 16, color: "000000" }}
                                    >
                                      <label>Attribute 4</label>
                                    </div>
                                    <BorderLinearProgress
                                      variant="determinate"
                                      value={75}
                                    />
                                  </div>
                                  <div>
                                    <div
                                      style={{ fontSize: 16, color: "000000" }}
                                    >
                                      <label>Attribute 5</label>
                                    </div>
                                    <BorderLinearProgress
                                      variant="determinate"
                                      value={25}
                                    />
                                  </div>
                                </div>
                              </Grid>
                            </Grid>
                          </Paper>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{
                          marginTop: 40,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginLeft: 50,
                          marginRight: 50,
                        }}
                      >
                        <h3
                          style={{
                            fontSize: 28,
                            color: "#385A7C",
                            fontFamily: "Oswald",
                          }}
                        >
                          All SubJob Structure
                        </h3>
                        <ColorButton
                          variant="contained"
                          startIcon={<AddIcon />}
                          onClick={handleClickOpen}
                          style={{ fontFamily: "Oswald" }}
                        >
                          Create Sub Job
                        </ColorButton>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Grid item xs={12}>
                          <Grid
                            container
                            justify="flex-start"
                            spacing={3}
                            style={{ marginTop: 15 }}
                          >
                            {CreateSubJobReducer.SubJob.map((itemSubJob, index) => {
                              console.log("bird",itemSubJob);
                              return (
                                <Grid key={index} item xs={12} sm={4}>
                                  <Paper
                                    className={classes.paper}
                                    onClick={() =>
                                      handleClickToPosition(itemSubJob, item)
                                    }
                                  >
                                    <div style={{ margin: 20 }}>
                                      {itemSubJob.NameSubJob}
                                    </div>
                                    <Paper style={{ margin: 20 }}>
                                      <img
                                        src={itemSubJob.preview}
                                        width="200"
                                        height="250"
                                      />
                                    </Paper>
                                  </Paper>
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                  >
                    <Grid container>
                      <Grid xs={12} sm={12} item>
                        <DialogTitle
                          style={{ textAlign: "center", color: "#5B5656" }}
                        >
                          <h3 style={{ fontSize: 20, color: "#FF3019" }}>
                            Create New SubJob
                          </h3>
                        </DialogTitle>
                      </Grid>
                      <DialogContent>
                        <Formik
                          onSubmit={(values, { setSubmitting }) => {
                            let dataSend = Object.assign({}, values);
                            dataSend.ParentJobName = item.NameJob;
                            dataSend.preview = newSubJob.preview;
                            dataSend.raw = newSubJob.raw;
                            console.log(values);
                            dispatch(CreateAction.CreateSubJob(dataSend));
                            handleClose();
                          }}
                          initialValues={newSubJob}
                        >
                          {(props) => showForm(props)}
                        </Formik>
                      </DialogContent>
                    </Grid>
                  </Dialog>
                </Grid>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      ) : (
        <div>No result</div>
      )}
    </div>
  );
}
