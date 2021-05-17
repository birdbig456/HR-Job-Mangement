import React, { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  MHbox: {
    margin: theme.spacing(1),
    minWidth: 480,
  },
  textField: {
    width: "25ch",
  },
  textLabel: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
}));

export default function FormAvg() {
  const classes = useStyles();
  const [reMark, setReMark] = React.useState({
    ReUnexpected: "",
    ReMeeting: "",
    ReVoyage: "",
    RePrepare: "",
    ReTraining: "",
    ReOther: "",
  });

  const handleChange = (prop) => (event) => {
    setReMark({ ...reMark, [prop]: event.target.value });
  };

  const [manHour, setManHour] = React.useState({
    Unexpected: "",
    Meeting: "",
    Voyage: "",
    Prepare: "",
    Training: "",
    Other: "",
  });

  const handleChange2 = (prop1) => (event) => {
    setManHour({ ...manHour, [prop1]: event.target.value });
  };

  console.log(reMark, manHour);
  return (
    <div>
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={classes.textLabel}
          style={{ display: "flex", alignItems: "center" }}
        >
          Average Unexpected Task :
        </div>
        <FormControl className={classes.MHbox} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            ManHour / Month
          </InputLabel>
          <OutlinedInput
            variant="outlined"
            label="ManHour / Month"
            id="outlined-adornment-amount"
            value={manHour.Unexpected}
            onChange={handleChange2("Unexpected")}
          />
        </FormControl>

        <FormControl className={classes.margin} variant="outlined">
          <InputLabel>Remark</InputLabel>
          <OutlinedInput
            variant="outlined"
            label="Remark"
            id="outlined-adornment-amount"
            value={reMark.ReUnexpected}
            onChange={handleChange("ReUnexpected")}
          />
        </FormControl>
      </Grid>

      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={classes.textLabel}
          style={{ display: "flex", alignItems: "center" }}
        >
          Average Meeting Time :
        </div>
        <FormControl className={classes.MHbox} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            ManHour / Month
          </InputLabel>
          <OutlinedInput
            variant="outlined"
            label="ManHour / Month"
            id="outlined-adornment-amount"
            value={manHour.Meeting}
            onChange={handleChange2("Meeting")}
          />
        </FormControl>

        <FormControl className={classes.margin} variant="outlined">
          <InputLabel>Remark</InputLabel>
          <OutlinedInput
            variant="outlined"
            label="Remark"
            id="outlined-adornment-amount"
            value={reMark.ReMeeting}
            onChange={handleChange("ReMeeting")}
          />
        </FormControl>
      </Grid>

      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={classes.textLabel}
          style={{ display: "flex", alignItems: "center" }}
        >
          Average Voyage Time :
        </div>
        <FormControl className={classes.MHbox} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            ManHour / Month
          </InputLabel>
          <OutlinedInput
            variant="outlined"
            label="ManHour / Month"
            id="outlined-adornment-amount"
            value={manHour.Voyage}
            onChange={handleChange2("Voyage")}
          />
        </FormControl>

        <FormControl className={classes.margin} variant="outlined">
          <InputLabel>Remark</InputLabel>
          <OutlinedInput
            variant="outlined"
            label="Remark"
            id="outlined-adornment-amount"
            value={reMark.ReVoyage}
            onChange={handleChange("ReVoyage")}
          />
        </FormControl>
      </Grid>

      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={classes.textLabel}
          style={{ display: "flex", alignItems: "center" }}
        >
          Average Prepare Date Time :
        </div>
        <FormControl className={classes.MHbox} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            ManHour / Month
          </InputLabel>
          <OutlinedInput
            variant="outlined"
            label="ManHour / Month"
            id="outlined-adornment-amount"
            value={manHour.Prepare}
            onChange={handleChange2("Prepare")}
          />
        </FormControl>

        <FormControl className={classes.margin} variant="outlined">
          <InputLabel>Remark</InputLabel>
          <OutlinedInput
            variant="outlined"
            label="Remark"
            id="outlined-adornment-amount"
            value={reMark.RePrepare}
            onChange={handleChange("RePrepare")}
          />
        </FormControl>
      </Grid>

      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={classes.textLabel}
          style={{ display: "flex", alignItems: "center" }}
        >
          Average Training Time :
        </div>
        <FormControl className={classes.MHbox} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            ManHour / Month
          </InputLabel>
          <OutlinedInput
            variant="outlined"
            label="ManHour / Month"
            id="outlined-adornment-amount"
            value={manHour.Training}
            onChange={handleChange2("Training")}
          />
        </FormControl>

        <FormControl className={classes.margin} variant="outlined">
          <InputLabel>Remark</InputLabel>
          <OutlinedInput
            variant="outlined"
            label="Remark"
            id="outlined-adornment-amount"
            value={reMark.ReTraining}
            onChange={handleChange("ReTraining")}
          />
        </FormControl>
      </Grid>

      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={classes.textLabel}
          style={{ display: "flex", alignItems: "center" }}
        >
          Other Task Time :
        </div>
        <FormControl className={classes.MHbox} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            ManHour / Month
          </InputLabel>
          <OutlinedInput
            variant="outlined"
            label="ManHour / Month"
            id="outlined-adornment-amount"
            value={manHour.Other}
            onChange={handleChange2("Other")}
          />
        </FormControl>

        <FormControl className={classes.margin} variant="outlined">
          <InputLabel>Remark</InputLabel>
          <OutlinedInput
            variant="outlined"
            label="Remark"
            id="outlined-adornment-amount"
            value={reMark.ReOther}
            onChange={handleChange("ReOther")}
          />
        </FormControl>
      </Grid>
      <Button
        style={{
          background: "#fec566",
          color: "#fff",
          float: "right",
          marginTop: 12,
          marginRight:150,
        }}
        variant="contained"
      >
        submit
      </Button>
    </div>
  );
}
