import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import * as CreateAction from "../../../actions/CreateJob.action";

const useStyles = makeStyles((theme) => ({}));

export default function TaskPersonal() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const CreateTaskPersonalReducer = useSelector(
    ({ CreateTaskPersonalReducer }) => CreateTaskPersonalReducer
  );
  return (
    <div style={{ paddingInline: "15%" }}>
      <h3
        style={{
          fontFamily: "Oswald",
          color: "#385a7c",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        TASK PERSONAL
      </h3>
      {Object.values(CreateTaskPersonalReducer).map((item, index) => (
        <Grid container style={{ marginBottom: 20 }}>
          <h3
            style={{
              fontFamily: "Oswald",
              color: "#fec566",
              fontWeight: "bold",
              marginTop: 0,
            }}
          >
            {item.Task}
          </h3>
          <Grid item xs={12} sm={12}>
            <TextField
              style={{ width: "100%" }}
              id=""
              label="Job Task"
              defaultValue={item.Task}
              inputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={4} sm={4} style={{ marginTop: 10, paddingRight: 5 }}>
            <TextField
              style={{ width: "100%" }}
              id=""
              label="Frequency"
              defaultValue={item.Frequency}
              inputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4} sm={4} style={{ marginTop: 10, paddingInline: 5 }}>
            <TextField
              style={{ width: "100%" }}
              id=""
              label="ManHours Use"
              defaultValue={item.ManHours}
              inputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4} sm={4} style={{ marginTop: 10, paddingLeft: 5 }}>
            <TextField
              style={{ width: "100%" }}
              id=""
              label="Type"
              defaultValue={item.Type}
              inputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
