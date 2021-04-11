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
      {Object.values(CreateTaskValueReducer).map((item, index) => (
        <div id="Form control" style={{display:"flex",justifyContent:"space-between",marginBottom:15}}>
          <TextField
            id=""
            label="Job Task"
            defaultValue={item.Task}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            id=""
            label="Frequency"
            defaultValue={item.Frequency}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            id=""
            label="ManHours Use"
            defaultValue={item.ManHours}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            id=""
            label="Type"
            defaultValue={item.Type}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </div>
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
