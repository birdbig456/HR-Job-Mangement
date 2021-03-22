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
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
  button: {
    background: "#82b440",
    color: "#ffff",
  },
}));

export default function JobView() {
  const classes = useStyles();

  const [count, setCount] = useState(4);
  const dispatch = useDispatch();
  const CreateTeamReducer = useSelector(
    ({ CreateTeamReducer }) => CreateTeamReducer
  );
  return (
    <div style={{ backgroundColor: "#fafafa", padding: 20 }}>
      <Grid container>
        <Grid item xs={12} sm={12} style={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
          <h3 style={{fontSize:28,color: "#385A7C",fontFamily:"Oswald"}}>Workforce Capacity</h3>
          <Button
            className={classes.button}
            variant="contained"
            onMouseEnter={() => {}}
            onClick={() => {
              dispatch(CreateAction.CreateTeam(count));
              setCount(count + 1);
            }}
          >
            Create Division
          </Button>
          </Grid>
      </Grid>

      {CreateTeamReducer.Team.map((num, index) => (
        <Accordion key={index}
          style={{ marginTop: 20, boxShadow: "0px 0px 0px rgba(0,0,0,0)",background:"#13b5ea",borderRadius:15 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            style={{ border: "0px", boxShadow:"0px 1px 1px rgba(0, 0, 0, 0.1)" ,borderRadius:15}}
          >
            <Typography
              className={classes.heading}
              style={{
                color: "#ffffff",
                textAlign: "center",
                width: "100%",
                fontSize: 17,
                fontFamily:"Noto Sans",
                fontWeight:"bold"
              }}
            >
              Division : {num}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ background: "#fff" }}>
            <Grid container >
              <Grid item xs={12} sm={9} style={{borderRight:"1px solid #e5e5e5"}}>
                <TeamView />
              </Grid>
              <Grid item xs={12} sm={3}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    marginTop: 55,
                    marginLeft:15,
                    marginRight:15,
                    backgroundColor: "#13b5ea",
                    padding: 10,
                    border: 0,
                    borderRadius: 5,
                    color:'white'
                  }}
                >
                  Division : {num}
                </div>
                <StatusView />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
