import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import AddIcon from "@material-ui/icons/Add";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import IconButton from "@material-ui/core/IconButton";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import PieChart from "./Charts/PieChart";
import MyRadarComp from "./Charts/MyRadarComp";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
    width: 150,
  },
  colorPrimary: {
    backgroundColor: "#e8e8e8",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#70c3bb",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(3),
  },
  paperJobfit: {
    border: "solid 1px #e5e5e5",
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  Newpaper: {
    background: "#ffff",
    height: "auto",
    width: 800,
    marginTop: theme.spacing(3),
    border: "solid 1px #e5e5e5",
    borderRadius: 5,
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    margin: "auto",
    fontSize: 14,
    paddingBottom: 20,
    marginBottom: 20,
  },
  paperAttribute: {
    boxFlexGroup: "#fff",
    height: "auto",
    width: 1200,
    marginTop: theme.spacing(3),
    border: "solid 1px #e5e5e5",
    margin: "auto",
    fontSize: 14,
    marginBottom: 20,
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    paddingBottom: 20,
    marginBottom: 20,
  },
  paperPeople: {
    border: "1px solid #000000",
    padding: 30,
    height: "auto",
    width: 800,
    margin: "auto",
    fontSize: 16,
  },
  paperCompetency: {
    padding: 30,
    height: "auto",
    width: 900,
    margin: "auto",
    fontSize: 18,
  },
  paperJobProfile: {
    paddingBottom: 40,
    height: "auto",
    width: 1200,
    marginTop: theme.spacing(3),
    border: "solid",
    margin: "auto",
    fontSize: 16,
    marginBottom: 20,
  },
  paperBox: {
    border: "solid 1px #e5e5e5",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  paperRecom: {
    border: "solid 1px #e5e5e5",
    color:"#828282",
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
  },
}));

export default function JobView() {
  const classes = useStyles();
  const CreateAttributeReducer = useSelector(
    ({ CreateAttributeReducer }) => CreateAttributeReducer
  );

  const CreateJobFitReducer = useSelector(
    ({ CreateJobFitReducer }) => CreateJobFitReducer
  );
  const CreateJobPeopleReducer = useSelector(
    ({ CreateJobPeopleReducer }) => CreateJobPeopleReducer
  );
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(() => {
        return Math.min(100), console.log();
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div style={{ backgroundColor: "#fff", padding: 20 }}>
      {/* <h3 style={{color:"#13b5ea",}}>{itemPosition.NamePosition}</h3> */}
      <div className={classes.Newpaper}>
        <Typography
          style={{
            color: "#385a7c",
            fontFamily: "Oswald",
            textTransform:"uppercase",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 65,
            paddingTop: 20,
            paddingBottom: 10,
            display:"flex",
            alignItems:"center"
          }}
        >
        <BeenhereIcon fontSize="medium" style={{color:"#fec566",marginRight:5}}/>HRBP Manager
        </Typography>
        <Grid container style={{ paddingInline:"4%"}}>
         
          <Grid item xs={3} sm={3}>
            <div
              style={{ marginLeft: 65, color: "#262626", }}
            >
              <p>Job group : </p>
              <p>Department : </p>
              <p>Company : </p>
              <p>Job Level : </p>
              <p>Experience need : </p>
            </div>
          </Grid>
          <Grid item xs={3} sm={3}>
            <div style={{ marginLeft: 50 ,color:"#828282"}}>
              <p>HR</p>
              <p>HRBP</p>
              <p>TPE</p>
              <p>20</p>
              <p>5-8 y</p>
            </div>
          </Grid>
          <Grid item xs={3} sm={3}>
            <div style={{ color: "#262626",}}>
              <p>Sub Job group : </p>
              <p>Section : </p>
              <p>Location : </p>
              <p>Job Grade : </p>
              <p>Education Require :</p>
            </div>
          </Grid>
          <Grid item xs={3} sm={3}>
            <div style={{color:"#828282"}}>
            <p>HRBP</p>
            <p>-</p>
            <p>Rayong</p>
            <p>S2 - S4</p>
            <p>Any Field</p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.Newpaper}>
        <div style={{}}>
          <Typography
            style={{
              color: "#385a7c",
              fontFamily: "Oswald",
              textTransform:"uppercase",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 65,
              paddingTop: 20,
              paddingBottom: 10,
              display:"flex",
            alignItems:"center"
            }}
          >
            <BeenhereIcon fontSize="medium" style={{color:"#fec566",marginRight:5}}/>Job Fit Detail
          </Typography>
          <div className={classes.paperJobfit}>
            <p style={{ textAlign: "center" }}>require persuasive ability person</p>
            {CreateJobFitReducer.map((itemJobFit, index) => ({ itemJobFit }))}
          </div>
        </div>
      </div>
      <div className={classes.Newpaper}>
        <div style={{}}>
          <Typography
            style={{
              color: "#385a7c",
              fontFamily: "Oswald",
              textTransform:"uppercase",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 65,
              paddingTop: 20,
              paddingBottom: 10,
              display:"flex",
            alignItems:"center"
            }}
          >
            <BeenhereIcon fontSize="medium" style={{color:"#fec566",marginRight:5}}/>Attributes
          </Typography>
          <Grid container >
            {CreateAttributeReducer.map((itemAttribute, index) => (
              <Grid
                item
                xs={6}
                sm={6}
                style={{marginTop: 20 }}
              >
                <Grid container key={index} style={{ marginBottom: 10 }}>
                  <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
                    {itemAttribute.name}
                  </Grid>
                  <Grid item xs={12} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <BorderLinearProgress variant="determinate" value={30} />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      <div className={classes.Newpaper}>
        <div style={{}}>
          <Typography
            style={{
              color: "#385a7c",
              fontFamily: "Oswald",
              textTransform:"uppercase",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 65,
              paddingTop: 20,
              paddingBottom: 10,
              display:"flex",
            alignItems:"center"
            }}
          >
            <BeenhereIcon fontSize="medium" style={{color:"#fec566",marginRight:5}}/>Job Profile
          </Typography>
          <div style={{ marginTop: 30 }}>
            {CreateJobPeopleReducer.map((itemJobPeople, index) => (
              <Grid container key={index} style={{}}>
                <Grid item xs={12} sm={4}>
                  <div className={classes.paperBox}>
                    <p>Job Level :{itemJobPeople.JobLevel}</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className={classes.paperBox}>
                    <p>Job Classified : {itemJobPeople.JobClassifield}</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className={classes.paperBox}>
                    <p>Experience Need : {itemJobPeople.Exp} Years</p>
                  </div>
                </Grid>
              </Grid>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.Newpaper}>
        <div style={{}}>
          <Typography
            style={{
              color: "#385a7c",
              fontFamily: "Oswald",
              textTransform:"uppercase",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 65,
              paddingTop: 20,
              paddingBottom: 10,
              display:"flex",
            alignItems:"center"
            }}
          >
            <BeenhereIcon fontSize="medium" style={{color:"#fec566",marginRight:5}}/>Project Pass Need
          </Typography>
          <div style={{ marginLeft: 65, color: "", }}>
            <p>1. DF Portal</p>
            <p>2. Pity Cash</p>
            <p>3. Seeable</p>
            <p>4. Go dutch</p>
          </div>
        </div>
      </div>

      <div className={classes.Newpaper}>
        <Typography
          style={{
            color: "#385a7c",
            fontFamily: "Oswald",
            textTransform:"uppercase",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 65,
            paddingTop: 20,
            paddingBottom: 10,
            display:"flex",
            alignItems:"center"
          }}
        >
          <BeenhereIcon fontSize="medium" style={{color:"#fec566",marginRight:5}}/>Competency Need
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MyRadarComp />
        </div>
      </div>

      <div className={classes.Newpaper}>
        <Typography
          style={{
            color: "#385a7c",
            fontFamily: "Oswald",
            textTransform:"uppercase",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 65,
            paddingTop: 20,
            paddingBottom: 10,
            display:"flex",
            alignItems:"center"
          }}
        >
          <BeenhereIcon fontSize="medium" style={{color:"#fec566",marginRight:5}}/>Job Task
        </Typography>
        <PieChart />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            size="small"
            style={{ background: "#fec566", color: "#ffffff", marginRight: 40 ,fontFamily:"Oswald"}}
          >
            View Job Task
          </Button>
        </div>
      </div>

      <div className={classes.Newpaper}>
        <Typography
          style={{
            color: "#385a7c",
            fontFamily: "Oswald",
            textTransform:"uppercase",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 65,
            paddingTop: 20,
            paddingBottom: 10,
            display:"flex",
            alignItems:"center"
          }}
        >
          <BeenhereIcon fontSize="medium" style={{color:"#fec566",marginRight:5}}/>Lastes Person Inxxxxxx
        </Typography>
        <Grid container style={{marginBottom:15}}>
          {/* <Grid
            item
            xs={12}
            sm={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>Graph</p>
          </Grid> */}
          <Grid item xs={12} sm={12}>
            <p
              style={{
                textAlign: "center",
                color: "#262626",
                fontWeight: "normal",
                fontFamily: "",
                color:"#828282",
                marginBottom:5,
                fontSize: 16,
                textTransform:"uppercase"
              }}
            >
              Puttinun Moungprasert
            </p>
            <Grid container style={{ paddingInline:"15%"}}>
              <Grid item xs={1} sm={1}></Grid>
              <Grid
                item
                xs={3}
                sm={3}
                style={{ color: "#", fontWeight: "normal" }}
              >
                <div style={{ marginLeft: 65 }}>
                  <p>ESY : </p>
                  <p>TIP : </p>
                </div>
              </Grid>
              <Grid item xs={2} sm={2}>
                <div style={{color:"#828282"}}>
                  <p>11/2</p>
                  <p>4/2</p>
                </div>
              </Grid>
              <Grid
                item
                xs={3} sm={3}
                style={{ color: "#", fontWeight: "normal" }}
              >
                <div style={{ marginLeft: 40 }}>
                  <p>Service year :</p>
                  <p>Age : </p>
                </div>
              </Grid>
              <Grid item xs={3} sm={3}>
                <div style={{color:"#828282"}}>
                  <p>8/4</p>
                  <p>36/2</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes.Newpaper}>
        <Typography
          style={{
            color: "#385a7c",
            fontFamily: "Oswald",
            textTransform:"uppercase",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 65,
            paddingTop: 20,
            paddingBottom: 10,
            display:"flex",
            alignItems:"center"
          }}
        >
          <BeenhereIcon fontSize="medium" style={{color:"#fec566",marginRight:5}}/>Recommendation
        </Typography>
        <Grid container style={{ alignItems: "center", marginLeft: 60 }}>
          <Avatar>B</Avatar>
          <div className={classes.paperRecom}>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
        </Grid>
        <Grid container style={{ alignItems: "center", marginLeft: 60 }}>
          <Avatar>M</Avatar>
          <div className={classes.paperRecom}>
            <p>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>
        </Grid>
        <Grid container style={{ alignItems: "center", marginLeft: 60 }}>
          <Avatar>A</Avatar>
          <div className={classes.paperRecom}>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
        </Grid>
      </div>
      <Link
      to="/CreateJob"
      style={{textDecoration:"none"}}>
        <Button
          variant="contained"
          size="small"
          style={{
            background: "#13b5ea",
            color: "#ffffff",
            display:"block",
            margin:"auto",
            fontFamily:"Oswald"
          }}
        >
          View Job Family
        </Button>
      </Link>
    </div>
  );
}
