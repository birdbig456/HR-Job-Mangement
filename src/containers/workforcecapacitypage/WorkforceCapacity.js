import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import * as CreateAction from "../../actions/CreateJob.action";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AcTeam1 from "./Accordions/AcTeam1"

const useStyles = makeStyles((theme) => ({
  button:{
    background:'#07B1C8',
    color:'#ffff'
  }
}));

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
            className={classes.button}
            variant="contained"
            onMouseEnter={()=>{}}
            onClick={() => {
              dispatch(CreateAction.CreateTeam(count));
              setCount(count + 1);
            }}
          >
            Create Team
          </Button>
        </Grid>
      </Grid>

      {CreateTeamReducer.Team.map((num, index) => (
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            style={{ background: "#FF5745" }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "#ffffff", textAlign: "center", width: "100%" }}
            >
              Team : {num}
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <AcTeam1/>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
