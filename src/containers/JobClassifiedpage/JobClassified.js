import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import * as CreateAction from "../../actions/CreateJob.action";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    card:{
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:10
    },
    button: {
      background: "#FF3019",
      color: "#ffff",
    },
  }));

export default function JobClassified() {
    const classes = useStyles();

    const [count, setCount] = useState(4);
  const dispatch = useDispatch();
  const CreateLevelReducer = useSelector(
    ({ CreateLevelReducer }) => CreateLevelReducer
  );
    return (
        <div style={{ backgroundColor: "#fafafa", padding: 20 }} >
        <Grid container>
        <Grid item xs={12} sm={12} style={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
          <h3 style={{fontSize:28,color: "#385A7C",fontFamily:"Oswald"}}>Job Classified</h3>
          <Button 
            className={classes.button}
            variant="contained"
            onMouseEnter={() => {}}
            onClick={() => {
              dispatch(CreateAction.CreateLevel(count));
              setCount(count + 1);
            }}
          >
            Create Level
          </Button>
          </Grid>
        </Grid>

        {CreateLevelReducer.Level.map((num, index) => (
        <Card  key={index} className={classes.card}>
            <CardContent style={{}}>
                <Grid item xs={12} sm={12} style={{display:"flex", justifyContent:"space-between",alignItems:'center'}}>
                    <Typography 
                        style={{
                            color: "#ff3019",
                            textAlign: "Left",
                            width: "100%",
                            fontSize: 18,
                            fontFamily:"Noto Sans",
                            fontWeight:"bold"
                            }}
                        >
                         Level {num}
                  </Typography>
                    <CardActions style={{padding:0}}>
                        <IconButton style={{padding:0,color:"#ff3019"}}><CancelIcon/></IconButton>
                    </CardActions>
                </Grid>
                <Grid style={{display:"flex", justifyContent:"space-evenly"}}>
                <TextField style={{marginTop:15}} id="outlined-basic" label="Min" variant="outlined" />
                <TextField style={{marginTop:15}} id="outlined-basic" label="Max" variant="outlined" />
                <TextField style={{marginTop:15}} id="outlined-basic" label="Average" variant="outlined" />
                <TextField style={{marginTop:15}} id="outlined-basic" label="Market Public" variant="outlined" />
                </Grid>
            </CardContent>
        </Card>
        ))}
        </div>
    )
}
