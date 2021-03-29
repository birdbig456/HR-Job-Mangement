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



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    minWidth: 614,
    
  },
  boxwidth:{
    margin: theme.spacing(1),
    minWidth: 180,
  },
}));

export default function TaskInFo() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const [values, setValues] = React.useState({
    Task: "",
    Frequency: "",
    ManHours: "",
    Type: "",
  });
  const handleChange = (event) => {
    setValues(...values, event.target.value);
  };

  const handleChange2 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  console.log(values);
  return (
    <div>
       <div style={{display:"flex",justifyContent:"center"}}>
      <FormControl className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          label="Job Task" 
          variant="outlined" 
          value={values.Task}
          onChange={handleChange2("Task")}
        />
      </FormControl>
      </div>
    
    <div style={{display:"flex",justifyContent:"center"}}>
      <FormControl variant="outlined" className={classes.boxwidth}>
        <InputLabel id="1">Frequency</InputLabel>
        <Select
          labelId="1"
          label="Frequency"
          id="1"
          value={values.Frequency}
          onChange={handleChange2('Frequency')}
          // input={<BootstrapInput />}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Daily</MenuItem>
          <MenuItem value={20}>Weekly</MenuItem>
          <MenuItem value={30}>Monthly</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.boxwidth} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">ManHours Use</InputLabel>
          <OutlinedInput
            id="2"
            value={values.ManHours}
            label="ManHours Use" 
          variant="outlined" 
            onChange={handleChange2('ManHours')}
            
          />
        </FormControl>

        <FormControl variant="outlined" className={classes.boxwidth}>
        <InputLabel id="3">Type</InputLabel>
        <Select
          labelId="3"
          id="3"
          label="Type"
          value={values.Type}
          onChange={handleChange2('Type')}
          // input={<BootstrapInput />}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Routine</MenuItem>
          <MenuItem value={20}>Abnormal</MenuItem>
          
        </Select>
      </FormControl>
      </div>
    <IconButton style={{float:"right",marginRight:200}}>
      <AddCircleIcon fontSize="medium" style={{color:"#82b440"}} />
    </IconButton>
    </div>
  );
}
