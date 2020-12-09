import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
}));


export default function JobClassDisplay() {
    const classes = useStyles();
    const CreateclassReducer = useSelector(
      ({ CreateclassReducer }) => CreateclassReducer
    );
  
    return (
      <div className={classes.root}>
        {CreateclassReducer.map((item, index) => (
          <div style={{backgroundColor:"#ffffff",marginTop:`${28 + (2-(index+5))}%`,textAlign:"center",height:"auto",borderRadius:"15"}}>
          <div style={{backgroundColor:"#385A7C",borderBottom:"solid"}}>
                <h4>{item.valueMax}</h4>
          </div>
          <div style={{backgroundColor:"#ff3019",borderBottom:"solid"}}>
                <h4>{item.NameLevel}</h4>
          </div>
          <div style={{backgroundColor:"#36a69a"}}>
                <h4>{item.valueMin}</h4>
          </div>
      </div>
        ))}
      </div>
    );
  }
