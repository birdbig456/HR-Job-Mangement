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
  Block: {
    background:"#ffff",
    border: "solid 1px #E5E5E5",
    borderRadius: 5,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 40,
    height: 405,
    boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)",
  },
}));


export default function JobClassDisplay() {
    const classes = useStyles();
    const CreateclassReducer = useSelector(
      ({ CreateclassReducer }) => CreateclassReducer
    );
  
    return (
      <div style={{backgroundColor:"#fafafa"}} className={classes.root}>
        {CreateclassReducer.map((item, index) => (
          <div className={classes.Block} style={{backgroundColor:"#ffffff",marginTop:`${28 + (2-(index+2))}%`,textAlign:"center",height:180}}>
          <div style={{color:"#FF3319",fontFamily:"Oswald"}}>
                <h3>{item.valueMax}</h3>
          </div><hr style={{boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)",border: "solid 1px #E5E5E5"}} />
          <div style={{color:"#385A7C",fontFamily:"Oswald"}}>
                <h3>{item.NameLevel}</h3>
          </div><hr style={{boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)",border: "solid 1px #E5E5E5"}}/> 
          <div style={{color:"#FEC566",fontFamily:"Oswald"}}>
                <h3>{item.valueMin}</h3>
          </div>
      </div>
        ))}
      </div>
    );
  }
