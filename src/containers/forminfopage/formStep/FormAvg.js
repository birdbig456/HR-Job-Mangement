import React, { useState } from "react";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Grid from "@material-ui/core/Grid";
const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  
}));

export default function FormAvg() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  
  const [values, setValues] = React.useState({
    Task: '',
    Frequency: '',
    ManHours: '',
    Type: '',
  });


  const handleChange2 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

console.log(values)
  return (
    <div className={classes.root}>
        <Grid container>
            <Grid item xs={12} sm={5}>
                Average Unexpected Task
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                Average Unexpected Task
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                Average Unexpected Task
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                Average Unexpected Task
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                Average Unexpected Task
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                Average Unexpected Task
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Job Task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.Task}
            onChange={handleChange2('Task')}
            
          />
        </FormControl>
            </Grid>
            
        </Grid>        
    </div>
  );
}
