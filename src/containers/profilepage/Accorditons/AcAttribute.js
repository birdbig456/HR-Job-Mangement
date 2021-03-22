import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import { purple } from "@material-ui/core/colors";
import LinearProgress from "@material-ui/core/LinearProgress";
import MyRadarComp from "./RadarChart/MyRadarComp";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === "" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#26A69A",
  },
}))(LinearProgress);

export default function AcAttribute() {
  const CreateAttributeReducer = useSelector(
    ({ CreateAttributeReducer }) => CreateAttributeReducer
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
    <div>
      <Grid container>
        <Grid item xs={12} sm={8} style={{paddingRight:20}}>
          <Grid
            container
            style={{ textAlign: "left", paddingBottom: 20, lineHeight: 4 }}
          >
            {CreateAttributeReducer.map((itemAttribute,index) => (
              <Grid item key={index} xs={6} sm={6} style={{ paddingLeft: 40 }}>
                {itemAttribute.name}
                {console.log()}
                <BorderLinearProgress variant="determinate" value={80} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        
        <Grid item xs={12} sm={4} style={{margin:"auto"}}>
          <MyRadarComp />
        </Grid>
      </Grid>
    </div>
  );
}
