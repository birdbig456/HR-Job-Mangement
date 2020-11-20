import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import * as CreateAction from "../../actions/CreateJob.action";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CancelIcon from "@material-ui/icons/Cancel";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: "15%",
    marginRight: "15%",
    marginBottom: 10,
  },
  button: {
    background: "#FF3019",
    color: "#ffff",
  },
  button2:{
    background: "#385a7c",
    color: "#ffff",
    marginRight:10
  },
  button3: {
    background: "#36a69a",
    color: "#ffff",
  },
}));
export default function JobClassified() {
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
    if (AverageValue != NaN){
    let arr = valueAvg
      arr.splice(0,1,AverageValue)
    console.log(arr)
    setValueAvg(arr);
    }
  });
  const [count, setCount] = useState(2);
  const dispatch = useDispatch();
  const CreateLevelReducer = useSelector(
    ({ CreateLevelReducer }) => CreateLevelReducer
  );
  const handleClickToJobClassDisplay = () => {
    history.push(`/JobClassDisplay`);
  };

  return (
    <div style={{ backgroundColor: "#FAFAFA", padding: 20 }}>
      <Grid container>
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
          <h3 style={{ fontSize: 28, color: "#385A7C", fontFamily: "Oswald" }}>
            Job Classified
          </h3>
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
                  color: "#FF3019",
                  textAlign: "Left",
                  width: "100%",
                  fontSize: 18,
                  fontFamily: "Noto Sans",
                  fontWeight: "bold",
                }}
              >
                Level {num}
              </Typography>
              <CardActions style={{ padding: 0 }}>
                <IconButton style={{ padding: 0, color: "#FF3019" }}>
                  <CancelIcon />
                </IconButton>
              </CardActions>
            </Grid>
            <Grid
              style={{ display: "flex", textAlign: "center", marginTop: 10 }}
            >
              <Grid item xs={4} sm={4}>
                <TextField
                  style={{ margin: 10 }}
                  id="outlined-basic"
                  label="Level"
                  variant="outlined"
                  onChange={onChangeNameLevel}
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  style={{ margin: 10 }}
                  id="outlined-basic"
                  label="Min"
                  variant="outlined"
                  onChange={onChangeMin}
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  style={{ margin: 10 }}
                  id="outlined-basic"
                  label="Max"
                  variant="outlined"
                  onChange={onChangeMax}
                />
              </Grid>
            </Grid>
            <Grid style={{ display: "flex", textAlign: "center" }}>
              <Grid item xs={4} sm={4}>
                <TextField
                  style={{ margin: 10 }}
                  id="outlined-basic"
                  label="Average"
                  defaultValue="0"
                  variant="outlined"
                  value={valueAvg[index]}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  style={{ margin: 10 }}
                  id="outlined-basic"
                  label="Market Public"
                  variant="outlined"
                  onChange={onChangeMarketPB}
                />
              </Grid>
              <Grid item xs={4} sm={4}></Grid>
            </Grid>
            <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
              className={classes.button2}>
                Edit
              </Button>
              <Button
                className={classes.button}
                onClick={() => {
                  let dataSend = Object.assign({},);
                  dataSend.NameLevel = nameLevel;
                  dataSend.valueMax = valueMax;
                  dataSend.valueMin = valueMin;
                  dataSend.valueAvg = valueAvg;
                  dataSend.marketPB = marketPB;
                  console.log(dataSend.NameLevel)
                  dispatch(CreateAction.CreateClass(dataSend));
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
          className={classes.button}
          onClick = {() => handleClickToJobClassDisplay()}
          style={{paddingLeft:25,paddingRight:25}}
          >
            SUBMIT
          </Button>
        </Grid>
        <div>
          
        </div>
    </div>
  );
}