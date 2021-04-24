import React, { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import * as CreateAction from "../../../actions/CreateJob.action";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  boxwidth: {
    minWidth: "100%",
  },
  button3: {
    background: "#13b5ea",
    color: "#ffff",
    marginTop: 12,
  },
}));

export default function FormPersonal() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const [values, setValues] = React.useState([
    {
      Task: "",
      Frequency: "",
      ManHours: "",
      Type: "",
    },
  ]);
  const handleChange = (event) => {
    setValues(...values, event.target.value);
  };

  const handleChange2 = (index, prop) => (event) => {
    var arr = [...values];
    // console.log(arr, event.target.value)
    arr[index][prop] = event.target.value;
    setValues(arr);
  };

  const [count, setCount] = useState(2);
  const dispatch = useDispatch();
  const CreateTaskValueReducer = useSelector(
    ({ CreateTaskValueReducer }) => CreateTaskValueReducer
  );

  console.log(CreateTaskValueReducer);
  return (
    <div id="Wrapper" style={{ paddingInline:"15%"}}>
      <h3 style={{ fontSize: 28, color: "#385A7C", fontFamily: "Oswald" }}>
            Task Personal
          </h3>
      {Object.values(CreateTaskValueReducer).map((item, index) => (
        <Grid container style={{marginBottom:40}}>
          <Grid item xs={12} sm={12}>
            <TextField
            style={{width:"100%"}}
            id=""
            label="Job Task"
            defaultValue={item.Task}
            inputProps={{readOnly:true}}
            variant="outlined"/>

          </Grid>
          
          <Grid item xs={4} sm={4} style={{marginTop:10,paddingRight:5}}>
          <TextField
          style={{width:"100%"}}
            id=""
            label="Frequency"
            defaultValue={item.Frequency}
            inputProps={{readOnly:true}}
            variant="outlined"/>
          </Grid>
          <Grid item xs={4} sm={4} style={{marginTop:10,paddingInline:5}}>
          <TextField
          style={{width:"100%"}}
            id=""
            label="ManHours Use"
            defaultValue={item.ManHours}
            inputProps={{readOnly:true}}
            variant="outlined"/>
          </Grid> 
          <Grid item xs={4} sm={4} style={{marginTop:10,paddingLeft:5}}>
          <TextField
          style={{width:"100%"}}
            id=""
            label="Type"
            defaultValue={item.Type}
            inputProps={{readOnly:true}}
            variant="outlined"/>
          </Grid>
        </Grid>
        // <div id="Form control" style={{display:"flex",justifyContent:"space-between",marginBottom:15}}>
        //   <TextField
        //     id=""
        //     label="Job Task"
        //     defaultValue={item.Task}
        //     InputProps={{
        //       readOnly: true,
        //     }}
        //     variant="outlined"
        //   />
        //   <TextField
        //     id=""
        //     label="Frequency"
        //     defaultValue={item.Frequency}
        //     InputProps={{
        //       readOnly: true,
        //     }}
        //     variant="outlined"
        //   />
        //   <TextField
        //     id=""
        //     label="ManHours Use"
        //     defaultValue={item.ManHours}
        //     InputProps={{
        //       readOnly: true,
        //     }}
        //     variant="outlined"
        //   />
        //   <TextField
        //     id=""
        //     label="Type"
        //     defaultValue={item.Type}
        //     InputProps={{
        //       readOnly: true,
        //     }}
        //     variant="outlined"
        //   />
        // </div>
        
      ))}

      <Button
        className={classes.button3}
        onClick={() => {
          dispatch(CreateAction.CreateTaskValue(values));
          console.log();
        }}
      >
        Save
      </Button>

      <IconButton
        onMouseEnter={() => {}}
        onClick={() => {
          setValues([
            ...values,
            {
              Task: "",
              Frequency: "",
              ManHours: "",
              Type: "",
            },
          ]);
          dispatch(CreateAction.CreateTask(count));
          setCount(count + 1);
        }}
        style={{ float: "right" }}
      >
        <AddCircleIcon fontSize="medium" style={{ color: "#82b440" }} />
      </IconButton>
    </div>
  );
}
