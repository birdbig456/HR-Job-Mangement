import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import * as CreateAction from "../../actions/CreateJob.action";
const useStyles = makeStyles((theme) => ({}));

export default function JobView() {
  const classes = useStyles();

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const CreateTeamReducer = useSelector(
    ({ CreateTeamReducer }) => CreateTeamReducer
  );
  return (
    <div style={{ backgroundColor: "#fff", padding: 20 }}>
      <Grid container>
        <Grid item xs={6} sm={6} style={{ margin: "auto" }}>
          <span style={{ fontSize: 24 }}>Workforce Capacity</span>
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {dispatch(CreateAction.CreateTeam(count));
                setCount(count+1);}}
            
          >
            Create Team
          </Button>
        </Grid>
      </Grid>
      {CreateTeamReducer.Team.map((num,index)=>(
          <div style={{backgroundColor:"#FF5745",margin:40,textAlign:"center",fontSize:20,padding:20}}>
              Team:{num}
          </div>
      ))}
    </div>
  );
}
