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
import * as CreateAction from "../../../actions/CreateJob.action";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import { purple } from "@material-ui/core/colors";
import LinearProgress from "@material-ui/core/LinearProgress";
import { items } from "fusioncharts";
import CreatePositionReducer from "../../../reducers/CreatePosition.reducer";
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    marginRight: 20,
    "&:hover": {
      backgroundColor: green[700],
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
    width: 360,
    backgroundColor: "#FF9800",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    border: "1px solid #D2CBCB",
    fontSize: 14,
  },
  marginAt: {
    margin: theme.spacing(3),
    fontSize: 20,
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
    margin: theme.spacing(3),
    backgroundColor: "#F0F3EF",
    boxShadow: "0px 8px 4px rgba(0, 0, 0, 0.25);",
  },
}));
export default function PositionCrate({ match }) {
  const classes = useStyles();
  const CreateSubJobReducer = useSelector(
    ({ CreateSubJobReducer }) => CreateSubJobReducer
  );
  const CreateJobReducer = useSelector(
    ({ CreateJobReducer }) => CreateJobReducer
  );
  const CreatePositionReducer = useSelector(
    ({ CreatePositionReducer }) => CreatePositionReducer
  );
  console.log(CreateJobReducer);
  const dispatch = useDispatch();
  const [positionName, setPositionName] = useState("")
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const handleClickToPosition = (itemSubJob, item,itemPosition) => {
    history.push(`/${item.NameJob}/${itemSubJob.NameSubJob}/${itemPosition.NamePosition}`);
  };
  const handlechange  = (event) => {
    setPositionName(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    params: {},
  } = match;
  console.log(match.params.SubJobName);
  return (
    <div>
      {CreateSubJobReducer != null ? (
        <div>
          {CreateSubJobReducer.SubJob.map((itemSubJob, index) => {
            return match.params.SubJobName == itemSubJob.NameSubJob ? (
              <div key={index}>
                <Grid container className={classes.root}>
                  <Paper className={classes.paper}>
                    <div style={{ margin: 20 }}>{itemSubJob.NameSubJob}</div>
                    <Paper style={{ margin: 20 }}>
                      <img src={itemSubJob.preview} width="200" height="250" />
                    </Paper>
                  </Paper>
                </Grid>
                <Grid container>
                  <Grid item xs={12} sm={12} style={{
                            marginTop: 40,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginLeft: 50,
                            marginRight: 50,
                          }}>
                            <h3
                            style={{
                              fontSize: 28,
                              color: "#385A7C",
                              fontFamily: "Oswald",
                            }}
                          >
                            All Job Positions
                          </h3>
                          <ColorButton
                            variant="contained"
                            style={{ background: "#ff3019" }}
                            startIcon={<AddIcon />}
                            onClick={handleClickOpen}
                          >
                            Create Position
                          </ColorButton>
                  </Grid>

                    {CreateJobReducer.JobFamily.map((item, index) => {
                      console.log(item.NameJob, itemSubJob.NameSubJob);
                      return item.NameJob == itemSubJob.ParentJobName ? (
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          key={index}
                        >
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="form-dialog-title"
                          >
                            <Grid container>
                              <Grid xs={12} sm={12} item>
                                <DialogTitle
                                  style={{
                                    textAlign: "center",
                                    color: "#5B5656",
                                  }}
                                >
                                  <h3
                                    style={{ fontSize: 20, color: "#FF3019" }}
                                  >
                                    Create New Position
                                  </h3>
                                </DialogTitle>
                              </Grid>
                              <DialogContent>
                                <TextField
                                  id="standard-basic"
                                  label="Input Position Name"
                                  size="medium"
                                  fullWidth
                                  onChange={handlechange}
                                  
                                />
                                <Button
                                  onClick={() => {
                                    console.log(positionName)
                                    dispatch(CreateAction.CreatePosition(positionName),handleClose());
                                  }}
                                  className={classes.palette}
                                  color="primary"
                                  variant="contained"
                                  size="small"
                                  style={{
                                    margin: 7,
                                    background: "#FF3019",
                                    color: "#ffffff",
                                  }}
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
                              </DialogContent>
                            </Grid>
                          </Dialog>

                          <Grid item xs={12} sm={12} 
                                style={{display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop:40}}
                                        >
                          {CreatePositionReducer.Position.map((itemPosition, index) => (
                              <Grid key={index} item xs={12} sm={4}>
                                <Paper
                                  className={classes.paper}
                                  onClick={() =>
                                    handleClickToPosition(itemSubJob, item,itemPosition)
                                  }
                                >
                                  <div style={{ margin: 20 }}>
                                    {itemPosition.NamePosition}
                                  </div>
                                  
                                </Paper>
                              </Grid>
                            ))}
                            </Grid>

                        </Grid>
                        // Reducer
                      ) : (
                        ""
                      );
                    })}
                  

                </Grid> 
                {/* container */}
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
