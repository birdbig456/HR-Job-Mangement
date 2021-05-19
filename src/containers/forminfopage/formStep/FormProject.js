import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import * as CreateAction from "../../../actions/CreateJob.action";
const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: "15%",
    marginRight: "15%",
    marginBottom: 10,
  },
  button: {
    color:"#fec566"
  },
  button2: {
    background: "#fafafa",
    color: "#385a7c",
    marginRight: 10,
    border:"1px solid #385a7c",
    fontFamily:"Oswald"
  },
  button3: {
    background: "#13b5ea",
    color: "#ffff",
    fontFamily:"Oswald"
  },
  buttonSubmit:{
    background: "#fec566",
    color: "#ffff",
  }
}));
export default function FormProject() {
  const classes = useStyles();
  const [nameLevel, setNameLevel] = useState();
  const [valueMin, setValueMin] = useState();
  const [valueMax, setValueMax] = useState();
  const [valueAvg, setValueAvg] = useState([]);
  const [marketPB, setMarketPB] = useState();
  const history = useHistory();
  const onChangeNameLevel = (event) => {
    setNameLevel(event.target.value);
  };
  const onChangeMin = (event) => {
    setValueMin(event.target.value);
  };
  const onChangeMax = (event) => {
    setValueMax(event.target.value);
  };
  const onChangeMarketPB = (event) => {
    setMarketPB(event.target.value);
  };
  useEffect(() => {
    let AverageValue = (parseInt(valueMax) + parseInt(valueMin)) / 2;
    if (AverageValue != NaN) {
      let arr = valueAvg;
      arr.splice(0, 1, AverageValue);
      console.log(arr);
      setValueAvg(arr);
    }
  });
  const [count, setCount] = useState(2);
  const dispatch = useDispatch();
  const CreateProjectReducer = useSelector(
    ({ CreateProjectReducer }) => CreateProjectReducer
  );
  const handleClickToJobClassDisplay = () => {
    history.push("/JobClassDisplay");
  };

  return (
    <div style={{ backgroundColor: "#ffff", padding:0,}}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          
          <IconButton
            title="Create Project"
            variant="contained"
            onMouseEnter={() => {}}
            onClick={() => {
              dispatch(CreateAction.CreateProject(count));
              setCount(count + 1);
            }}
          >
            <AddCircleIcon className={classes.button} fontSize="medium" />
          </IconButton>
        </Grid>
      </Grid>
      {CreateProjectReducer.Project.map((num, index) => (
        <Card key={index} className={classes.card}>
          <CardContent style={{}}>
            <Grid
              item
              xs={12}
              sm={12}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  color: "#13b5ea",
                  textAlign: "Left",
                  width: "100%",
                  fontSize: 18,
                  fontFamily: "Noto Sans",
                  fontWeight: "bold",
                }}
              >
                Project {num}
              </Typography>
              <CardActions style={{ padding: 0 }}>
                <IconButton style={{ padding: 0, color: "#13b5ea" }}>
                  <CancelIcon />
                </IconButton>
              </CardActions>
            </Grid>
            <Grid container
              style={{ display: "flex", textAlign: "center", marginTop: 10 }}
            >

              <Grid item xs={4} sm={4}>
                <TextField
                  style={{ margin: 10 }}
                  id="outlined-basic"
                  label="Project Name"
                  variant="outlined"
                  onChange={onChangeNameLevel}
                />
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField
                  style={{ margin: 10 }}
                  id="outlined-basic"
                  fullWidth
                  label="Manhour/Month"
                  variant="outlined"
                  onChange={onChangeNameLevel}
                />
              </Grid>
              
              
            </Grid>
            <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button  variant="outlined" className={classes.button2}>Edit</Button>
              <Button
                className={classes.button3}
                onClick={() => {
                  let dataSend = Object.assign({});
                  dataSend.NameLevel = nameLevel;
                  dataSend.valueMax = valueMax;
                  dataSend.valueMin = valueMin;
                  dataSend.valueAvg = valueAvg;
                  dataSend.marketPB = marketPB;
                  console.log(dataSend.NameLevel);
                  ;
                }}
              >
                Save
              </Button>
            </Grid>
          </CardContent>
        </Card>
      ))}
      <Grid
        item
        xs={12}
        sm={12}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            style={{ paddingLeft: 25, paddingRight: 25,fontFamily:"Oswald" }}
          >
            SUBMIT
          </Button>
      </Grid>
    </div>
  );
}
