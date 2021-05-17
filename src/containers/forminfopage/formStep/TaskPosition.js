import React, { useState,useEffect } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import * as CreateAction from "../../../actions/CreateJob.action";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  HeaderTable: {
    // border: "1px solid #aaaa",
    // borderRadius: 0,
    background: "none",
  },
  TextTitle: {
    color: "#385a7c",
    margin: 10,
    textTransform: "uppercase",
  },
  TextInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
  },
  CheckboxColor: {
    color: "#fec566",
  },
}));

export default function TaskPosition() {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [values, setValues] =useState([]);
  const handleChange = (event) => {
    setValues(...values, event.target.value);
  };

  const handleChange2 = (index, prop) => (event) => {
    var arr = [...values];
    // console.log(arr, event.target.value)
    arr[index][prop] = event.target.value;
    setValues(arr);
  };

  useEffect(() => {
    console.log(values)
  }, [values])
  
  const handleList = (item, e) => {
    if(e.target.checked){
      setValues([
        ...values, item
      ])
    }
    else{
      setValues(
        values.filter(elem => elem.Task !== item.Task)
      )
    }
  }

  var hoursTotal = values.reduce(function(prev, cur) {
    return prev + parseInt(cur.ManHours);
  }, 0);
  
  console.log(hoursTotal)
  console.log(values.ManHours)

  const [count, setCount] = useState(2);
  const dispatch = useDispatch();
  const CreateTaskValueReducer = useSelector(
    ({ CreateTaskValueReducer }) => CreateTaskValueReducer
  );

  
  return (
    <div id="Wrapper" style={{ paddingInline:"10%"}}>
                <Grid
        container
        style={{
          fontFamily: "Oswald",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 15,
          marginBottom: 10,
          background: "#f5f6f7",
          borderRadius: 10,
        }}
      >
        <Grid item xs={1} sm={1} className={classes.HeaderTable}></Grid>
        <Grid item xs={5} sm={5} className={classes.HeaderTable}>
          <h3 className={classes.TextTitle}>Task</h3>
        </Grid>
        <Grid item xs={2} sm={2} className={classes.HeaderTable}>
          <h3 className={classes.TextTitle}>Frequency</h3>
        </Grid>
        <Grid item xs={2} sm={2} className={classes.HeaderTable}>
          <h3 className={classes.TextTitle}>Type</h3>
        </Grid>
        <Grid item xs={2} sm={2} className={classes.HeaderTable}>
          <h3 className={classes.TextTitle}>Time used</h3>
        </Grid>
      </Grid>


      {Object.values(CreateTaskValueReducer).map((item, index) => (
        <Grid
        container
        style={{
          fontFamily: "Montserrat",
        }}
      >
        <Grid item xs={1} sm={1} className={classes.TextInfo}>
          <Checkbox onChange={e => handleList(item, e)} color="#fec566" classes={{ root: classes.CheckboxColor }} />
        </Grid>
        <Grid item xs={5} sm={5} className={classes.TextInfo}>
          <a>{item.Task}</a>
        </Grid>
        <Grid item xs={2} sm={2} className={classes.TextInfo}>
          <a>{item.Frequency}</a>
        </Grid>
        <Grid item xs={2} sm={2} className={classes.TextInfo}>
          <a>{item.Type}</a>
        </Grid>
        <Grid item xs={2} sm={2} className={classes.TextInfo}>
          <a>{item.ManHours}</a>&nbsp;hrs.
        </Grid>
      </Grid>
        
      ))}

<hr style={{marginTop:20,border:"1px solid #e5e5e5"}}/>
<div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginTop: 0,
        }}
      >
        
        <div>
            <p style={{marginBottom:0,fontFamily:"Oswald",fontWeight:"bold",color:"#385a7c"}}>FTF PER MONTH :</p>
            <a style={{fontFamily:"Oswald",fontWeight:"bold",color:"#fec566",fontSize:22}}>{hoursTotal}<a> HRS.</a></a>
        </div>
      
        
        <Button
          variant="contained"
          fontSize="small"
          style={{
            background: "#13b5ea",
            color: "#ffff",
            fontFamily: "Oswald",
          }}
          onClick={() => {
            dispatch(CreateAction.CreateTaskPersonal(values))
            console.log();
            ;
          }}
        >
          select to personal
        </Button>
        
      </div>

    </div>
  );
}
