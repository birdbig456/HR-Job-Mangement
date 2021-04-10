import React, { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import * as CreateAction from "../../../actions/CreateJob.action";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    minWidth: "100%",
    
  },
  boxwidth:{
    minWidth: "100%",
  },
  button3: {
    background: "#13b5ea",
    color: "#ffff",
    marginTop:12,
  },
}));

export default function TaskInFo() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const [values, setValues] = React.useState([{
    Task: "",
    Frequency: "",
    ManHours: "",
    Type: "",
  }]);
  const handleChange = (event) => {
    setValues(...values, event.target.value);
  };

  const handleChange2 = (index, prop) => (event) => {
    var arr = [...values]
    // console.log(arr, event.target.value)
    arr[index][prop] = event.target.value
    setValues(arr);
  };

  const [count, setCount] = useState(2);
  const dispatch = useDispatch();
  const CreateTaskReducer = useSelector(
    ({ CreateTaskReducer }) => CreateTaskReducer
  );

  console.log(values);
  return (
    <div style={{paddingInline:"15%"}}>
    {CreateTaskReducer.Task.map((num,index) => (
      <Grid key={index} style={{}}>
        <h3 style={{fontFamily:"Oswald",color:"#13b5ea",fontWeight:"normal"}}>Task : {num}</h3>
       <Grid item xs={12} sm={12} style={{display:"flex",justifyContent:"center"}}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          label="Job Task" 
          variant="outlined" 
          name="Task"
          value={values[index].Task}
          onChange={handleChange2(index ,"Task")}
        />
        
      </FormControl>
      </Grid>
    
    <Grid  style={{display:"flex",justifyContent:"center",marginTop:10}}>
    <Grid item xs={4} sm={4}>
      <FormControl variant="outlined" className={classes.boxwidth} style={{paddingRight:5}}>
        <InputLabel id="1">Frequency</InputLabel>
        <Select
          labelId="1"
          label="Frequency"
          id="1"
          value={values[index].Frequency}
          onChange={handleChange2(index ,'Frequency')}
          // input={<BootstrapInput />}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Daily"}>Daily</MenuItem>
          <MenuItem value={"Weekly"}>Weekly</MenuItem>
          <MenuItem value={"Monthly"}>Monthly</MenuItem>
        </Select>
      </FormControl>
      </Grid>

      <Grid item xs={4} sm={4}>
      <FormControl className={classes.boxwidth} variant="outlined" style={{paddingInline:5}}>
          <InputLabel htmlFor="outlined-adornment-amount">ManHours Use</InputLabel>
          <OutlinedInput
            id="2"
            value={values[index].ManHours}
            label="ManHours Use" 
          variant="outlined" 
            onChange={handleChange2(index ,'ManHours')}
            
          />
        </FormControl>
        </Grid>

        <Grid item xs={4} sm={4}>
        <FormControl variant="outlined" className={classes.boxwidth} style={{paddingLeft:5}}>
        <InputLabel id="3">Type</InputLabel>
        <Select
          labelId="3"
          id="3"
          label="Type"
          value={values[index].Type}
          onChange={handleChange2(index ,'Type')}
          // input={<BootstrapInput />}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Routine"}>Routine</MenuItem>
          <MenuItem value={"Abnormal"}>Abnormal</MenuItem>
          
        </Select>
      </FormControl>
      </Grid>

      </Grid>
      </Grid>
      ))}
      
      <Button
                className={classes.button3}
                onClick={() => {
                  dispatch(CreateAction.CreateTaskValue(values))
                  console.log();
                  ;
                }}
              >
                Save
              </Button>

    <IconButton onMouseEnter={() => {}}
            onClick={() => {
              setValues([...values, {
                Task: "",
                Frequency: "",
                ManHours: "",
                Type: "",
              }])
              dispatch(CreateAction.CreateTask(count));
              setCount(count + 1);
            }} style={{float:"right"}}>
      <AddCircleIcon  fontSize="medium" style={{color:"#82b440"}} />
    </IconButton>
    </div>
  );
}
