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
  const [reMark, setReMark] = React.useState({
    ReUnexpected: '',
    ReMeeting: '',
    ReVoyage: '',
    RePrepare: '',
    ReTraing: '',
    ReOther: '',
  });


  const handleChange = (prop) => (event) => {
    setReMark({ ...reMark, [prop]: event.target.value });
  };
  
  const [manHour, setManHour] = React.useState({
    Unexpected: '',
    Meeting: '',
    Voyage: '',
    Prepare: '',
    Traing: '',
    Other: '',
  });


  const handleChange2 = (prop1) => (event) => {
    setManHour({ ...manHour, [prop1]: event.target.value });
  };

console.log(reMark,manHour)
  return (
    <div className={classes.root}>
        <Grid container>
            <Grid item xs={12} sm={5}>
                Average Unexpected Task
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">ManHour/Month</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={manHour.Unexpected}
            onChange={handleChange2('Unexpected')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Remark</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={reMark.ReUnexpected}
            onChange={handleChange('ReUnexpected')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                Average Meeting Time
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="-adornment-amount">ManHour/Month</InputLabel>
          <OutlinedInput
            id=""
            value={manHour.Meeting}
            onChange={handleChange2('Meeting')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Remark</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={reMark.ReMeeting}
            onChange={handleChange('ReMeeting')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                Average Voyage Time
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">ManHour/Month</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={manHour.Voyage}
            onChange={handleChange2('Voyage')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Remark</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={reMark.ReVoyage}
            onChange={handleChange('ReVoyage')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                Average Prepare Date Time
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">ManHour/Month</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={manHour.Prepare}
            onChange={handleChange2('Prepare')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Remark</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={reMark.RePrepare}
            onChange={handleChange('RePrepare')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                Average Traing Time
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">ManHour/Month</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={manHour.Traing}
            onChange={handleChange2('Traing')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Remark</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={reMark.ReTraing}
            onChange={handleChange('ReTraing')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                Other Task Time 
            </Grid>
            <Grid item xs={6} sm={5}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">ManHour/Month</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={manHour.Other}
            onChange={handleChange2('Other')}
            
          />
        </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Remark</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={reMark.ReOther}
            onChange={handleChange('ReOther')}
            
          />
        </FormControl>
            </Grid>

        </Grid>        
    </div>
  );
}
