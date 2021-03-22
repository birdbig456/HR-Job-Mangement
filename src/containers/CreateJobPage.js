import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useSelector, useDispatch } from "react-redux";
import * as CreateAction from "../actions/CreateJob.action";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import { purple } from "@material-ui/core/colors";
import LinearProgress from "@material-ui/core/LinearProgress";

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
    background:"#385A7C"
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
  },
  input: {
    display: "none",
  },
  paper: {
    margin: 20,
    width: 360,
    height:"auto",
    background:"#f3f6fc",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1);",
    border: "0px",
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
  avatarInPut: {
    width: 150,
    height:190,
    margin: theme.spacing(0),
    backgroundColor: "#fafafa",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1);",
  },
  marginAt: {
    margin: theme.spacing(3),
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
  margin: {
    float: "right",
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    background: "#82b440",
    "&:hover": {
      background:"#6A8F38",
    },
  },
}))(Button);

export default function CreateJobPage() {
  const CreateJobReducer = useSelector(
    ({ CreateJobReducer }) => CreateJobReducer
  );

  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(() => {
        return 80
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const history = useHistory();

  const dispatch = useDispatch();

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [newJob, setNewJob] = useState({
    NameJob: "",
    Description: "",
    preview: "",
    raw: "",
    Employee:[]
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickToSubJob = (item) => {
    history.push(`/${item.NameJob}`);
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
        setNewJob({
          ...newJob,
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0].name,
        });
        //values.preview = URL.createObjectURL(e.target.files[0]);
      }
    };
    return (
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sm={6} style={{display:"flex",justifyContent:"center"}}>
            <Paper
              className={classes.avatarInPut}
              style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:55}}
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
                {newJob.preview ? (
                  <img src={newJob.preview} width="100%" height="100%" />
                ) : (
                  <>
                    <IconButton
                      className={classes.white}
                      className={classes.palette}
                      aria-label="upload picture"
                      component="span"
                      style={{color:"#13b5ea"}}
                    >
                      <PhotoCamera/>
                    </IconButton>
                  </>
                )}
              </label>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container>
              <div style={{ marginLeft: 20 }}>
                <Grid item xs={12} sm={3}>
                  <TextField disabled label="Name" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    className={classes.palette}
                    color="primary"
                    label="Enter Job Name"
                    fullWidth
                    id="NameJob"
                    name="NameJob"
                    value={values.NameJob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField disabled label="Description" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    className={classes.palette}
                    color="primary"
                    label="Enter Description"
                    fullWidth
                    id="Description"
                    name="Description"
                    value={values.Description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <div style={{ display: "flex", justifyContent: "center", margin: 35 }}>
          <Button
            type="submit"
            className={classes.palette}
            variant="contained"
            size="small"
            style={{ margin: 7, background:"#13b5ea",color:"#ffffff" }}
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

  return (
    <div className={classes.root} style={{ fontSize: 18 }}>
      <Grid item xs={12} sm={12} style={{display:"flex",justifyContent:"space-between",alignItems:'center',marginLeft:50,marginRight:50}}>
      <h3 style={{fontSize:28,color: "#385A7C",fontFamily:"Oswald"}}>All Job Structure</h3>
      <ColorButton
        variant="contained"
        className={classes.margin}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
        style={{fontFamily:"Oswald"}}
      >
        Create sUb Job
      </ColorButton>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            justify="flex-start"
            spacing={3}
            style={{ marginTop: 15 }}
          >
            <Grid container>
              {CreateJobReducer.JobFamily.map((item, index) => (
                <Grid key={index} item xs={12} sm={4} style={{display:"flex", justifyContent:"center"}}>
                  <Paper
                    className={classes.paper}
                    type="button"
                    onClick={() => handleClickToSubJob(item)}
                  >
                    <div
                      style={{
                        color:"#13b5ea",
                        textAlign: "center",
                        fontSize: 20,
                        marginTop: 15,
                        fontWeight: "bold",
                        paddingTop:20,
                        fontFamily:"Oswald"
                      }}
                    >
                      {item.NameJob}
                      
                    </div>
                    <Grid container>
                      <Grid item xs={6} sm={6} style={{ display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                        <Paper className={classes.avatarInPut} 
                              style={{marginTop:10,
                                      borderTopLeftRadius:0,
                                      borderTopRightRadius:0,
                                      borderBottomLeftRadius:0,
                                      borderBottomRightRadius:0,
                                      }}>
                          <img src={item.preview} />
                        </Paper>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <div className={classes.marginAt} style={{lineHeight:"2",fontWeight:"bold",fontFamily:"Open Sans Condensed"}}>
                          <div>
                            <div style={{ fontSize: 16 ,color:"#000000",}}>
                              <label>Attribute 1</label>
                            </div>
                            <BorderLinearProgress
                              variant="determinate"
                              value={75}
                            />
                          </div>
                          <div >
                            <div style={{ fontSize: 16 ,color:"#000000",}}>
                              <label>Attribute 2</label>
                            </div>
                            <BorderLinearProgress
                              variant="determinate"
                              value={90}
                            />
                          </div>
                          <div >
                            <div style={{ fontSize: 16 ,color:"#000000",}}>
                              <label>Attribute 3</label>
                            </div>
                            <BorderLinearProgress
                              variant="determinate"
                              value={40}
                            />
                          </div>
                          <div >
                            <div style={{ fontSize: 16 ,color:"#000000",}}>
                              <label>Attribute 4</label>
                            </div>
                            <BorderLinearProgress
                              variant="determinate"
                              value={75}
                            />
                          </div>
                          <div >
                            <div style={{ fontSize: 16 ,color:"#000000",}}>
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
                </Grid>
              ))}
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
            <DialogTitle style={{ textAlign: "center",}}>
            <h3 style={{fontSize:20,color: "#13b5ea",fontFamily:"Oswald"}}>Create New Job</h3>
            </DialogTitle>
          </Grid>
          <DialogContent>
            <Formik
              onSubmit={(values, { setSubmitting }) => {
                let dataSend = Object.assign({}, values);

                dataSend.preview = newJob.preview;
                dataSend.raw = newJob.raw;
                dataSend.Employee = newJob.Employee;
                dispatch(CreateAction.CreateJob(dataSend));

                handleClose();
              }}
              initialValues={newJob}
            >
              {(props) => showForm(props)}
            </Formik>
          </DialogContent>
        </Grid>
      </Dialog>
    </div>
  );
}
