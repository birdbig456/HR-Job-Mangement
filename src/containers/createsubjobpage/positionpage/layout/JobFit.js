import React,{forwardRef, useState, useImperativeHandle} from "react";
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
import Typography from "@material-ui/core/Typography";
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
    width: 1100,
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

const JobFit = forwardRef((props, ref) => {
  console.log(ref)
  const classes = useStyles();

  const CreateAttributeReducer = useSelector(
    ({ CreateAttributeReducer }) => CreateAttributeReducer
  );

  const dispatch = useDispatch();
  const [newAttribute, setNewAttribute] = useState({
    NameAttribute: " ",
    ParentSubJobName:""
  })
const [isShow, setIsShow] = useState(false);

const [open, setOpen] = React.useState(false);


const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

useImperativeHandle(
  ref,
  () => {
    console.log("K")
  }
)

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
        <ThemeProvider theme={outerTheme}>
          <Grid container>
            
            <Grid container style={{ marginTop: 30 }}>
              <Grid item xs={12} sm={5}>
                <TextField disabled label="Name SubJob :" />
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  required
                  
                  color="primary"
                  label="Enter Name Attribute"
                  fullWidth
                  id="NameAttribute"
                  name="NameAttribute"
                  value={values.NameAttribute}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            </Grid>
          </Grid>
          <div
            style={{ display: "flex", justifyContent: "center", margin: 25 }}
          >
            <Button
              type="submit"
              className={classes.palette}
              variant="contained"
              size="small"
              style={{ margin: 7 ,background:"#13b5ea",color:"#ffff"}}
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
        </ThemeProvider>
      </form>
    );
  };


  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Grid container>
      <Grid item xs={12} sm={12} style={{ textAlign: "center" ,padding:20,margin:20}}>
          <span style={{ border: "solid" ,fontSize:24 , padding:20 }}>
           Job Fit
          </span>
        </Grid>

        <div className={classes.paperPeople}>
        <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
          
          <TextField
            rows={6}
            fullWidth
            required
            multiline
            variant="outlined"
            id="jobfit"
            style={{ margin: "auto", width: "85%", marginBottom: 20 }}
            placeholder="Input Jobfit"
            // defaultValue="Input Jobfit"
          />
        </Grid>
        <Grid
          container
          style={{ margin: "auto", width: "98%", paddingLeft: 90 }}
        >
          {CreateAttributeReducer[0].Attribute.map((itemAttribute, index) => (
            <Grid item key={index} xs={6} sm={3}>
              <FormControlLabel
                control={<Checkbox name="checked" color="primary" />}
                label={itemAttribute}
              />
            </Grid>
          ))}
          <Grid item sm={10}></Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" style={{background:"#82b440", color:"#ffffff"}} onClick={handleClickOpen}>
              Create New
            </Button>
          </Grid>
        


          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Grid container>
          <Grid xs={12} sm={12} item>
            <DialogTitle style={{ textAlign: "center", color: "#13b5ea" }}>
              Create New Attribute
            </DialogTitle>
          </Grid>
          <DialogContent>
            <Formik
              onSubmit={(values, { setSubmitting }) => {
                
                dispatch(CreateAction.CreateAttribute(values));
                handleClose();
              }}
              
              initialValues={newAttribute}
            >
              {(props) => showForm(props)}
            </Formik>
          </DialogContent>
        </Grid>
      </Dialog>


        </Grid>
        </div>
      </Grid>
    </div>
  );
})

export default JobFit