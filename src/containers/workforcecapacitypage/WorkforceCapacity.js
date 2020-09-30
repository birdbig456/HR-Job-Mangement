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
import TeamView from "./Accordions/TeamView";
import StatusView from "./Accordions/StatusView";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#FF3019",
    color: "#ffff",
  },
}));

export default function JobView() {
  const classes = useStyles();

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const CreateTeamReducer = useSelector(
    ({ CreateTeamReducer }) => CreateTeamReducer
  );
  return (
    <div style={{ backgroundColor: "#fafafa", padding: 20 }}>
      <Grid container>
        <Grid item xs={6} sm={6} style={{ margin: "auto" }}>
          <span style={{ fontSize: 24 }}>Workforce Capacity</span>
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: "right" }}>
          <Button
            className={classes.button}
            variant="contained"
            onMouseEnter={() => {}}
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
        <Accordion style={{ marginTop: 20 , boxShadow:"0px 0px 0px rgba(0,0,0,0)"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FF3019"}} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            style={{border:"2px solid #E5E5E5"}}
          >
            <Typography
              className={classes.heading}
              style={{ color: "#FF3019", textAlign: "left", width: "100%",fontSize:22 }}
            >
              Team : {num}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:"#fafafa"}}>
            <TeamView />
            {/* <Grid container>
              <Grid item xs={7} sm={7}>
                <TeamView />
              </Grid>
              <Grid item xs={5} sm={5}>
                <div style={{textAlign:"center",fontSize:22 ,marginTop:55 ,backgroundColor:"#c3c3c3",padding:10,border:0,borderRadius:5}}>Team :{num}</div>
                <StatusView />
              </Grid>
            </Grid> */}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
