import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NavigationIcon from "@material-ui/icons/Navigation";
import IconButton from "@material-ui/core/IconButton";
import AcJob from "./Accorditons/AcJob";
import AcAttribute from "./Accorditons/AcAttribute";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";
import AcEducation from "./Accorditons/AcEducation";
import AcExp from "./Accorditons/AcExp";
import AcProjExp from "./Accorditons/AcProjExp";
import AcCareer from "./Accorditons/AcCareer"
import AcPerform from "./Accorditons/AcPerform"
import Avatar from '@material-ui/core/Avatar';
import AcLearnPro from "./Accorditons/AcLearnPro"


const useStyles = makeStyles((theme) => ({
  marginPaper: {
    margin: "auto",
  },
  paperTop: {
    margin: "auto",
    marginTop: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  paperAccord: {
    margin: "auto",
    marginLeft: 20,
    marginTop: 20,
  },
  paperInFor: {
    margin: "auto",
    marginTop: 20,
  },
  heading: {
    // textAlign:"center",
    // color:"#ffffff",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  large: {
    margin:"auto",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={3}>
          {/*ส่วนของ profile picture */}
          <div style={{margin:10}}>
            <Paper className={classes.paperTop} style={{textAlign:"center"}}>
            <Avatar src="https://sv1.picz.in.th/images/2020/09/16/ORllZe.jpg" className={classes.large}></Avatar>
            <h2 style={{ color:"#385A7C"}}>Birdy Pongsakorn</h2>
            <h3 style={{ color:"#FEC566"}}>React Developer</h3>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          {/*ส่วนของ main infomation */}
          <Paper className={classes.paperInFor} style={{paddingTop:10,paddingBottom:20}}>
            <h2 style={{textAlign:"center",color:"#385A7C",fontWeight:"bold"}}>Main Information</h2>
            <Grid container >
              <Grid item xs={6} sm={6} style={{fontSize:16},{lineHeight:3}}>
                  <div style={{marginLeft:60}}>Employee ID : </div>
                  <div style={{marginLeft:60}}>Birthday : </div>
                  <div style={{marginLeft:60}}>Nationality : </div>
                  <div style={{marginLeft:60}}>Age : </div>
                  <div style={{marginLeft:60}}>Job group : </div>
                  <div style={{marginLeft:60}}>Department : </div>
                  <div style={{marginLeft:60}}>Section : </div>
              </Grid>
              <Grid item xs={6} sm={6} style={{fontSize:16},{lineHeight:3}}>
                  <div style={{marginLeft:60}}>ESY : </div>
                  <div style={{marginLeft:60}}>OESY : </div>
                  <div style={{marginLeft:60}}>TIG : </div>
                  <div style={{marginLeft:60}}>Tip : </div>
                  <div style={{marginLeft:60}}>Report to : </div>
                  <div style={{marginLeft:60}}>Email : </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <div style={{ marginTop: 20 }}>
            <Accordion style={{ marginTop: 10 , borderRadius:15}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{background:"#FF3019", borderRadius:10}}
              >
                <Typography className={classes.heading}  style={{color:"#ffffff",textAlign:"center",width:"100%"}}>Attibute</Typography>
              </AccordionSummary>
              <AccordionDetails >
                  <AcAttribute/>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ marginTop: 10 , borderRadius:15}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{background:"#FF3019", borderRadius:10}}
              >
                <Typography className={classes.heading} style={{color:"#ffffff",textAlign:"center",width:"100%"}}>Job</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <AcJob />
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ marginTop: 10 , borderRadius:15}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{background:"#FF3019", borderRadius:10}}
              >
                <Typography className={classes.heading} style={{color:"#ffffff",textAlign:"center",width:"100%"}}>Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
               
                  <AcEducation />
                
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ marginTop: 10 , borderRadius:15}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{background:"#FF3019", borderRadius:10}}
              >
                <Typography className={classes.heading} style={{color:"#ffffff",textAlign:"center",width:"100%"}}>Experience Profile</Typography>
              </AccordionSummary>
              <AccordionDetails>
               
                  <AcExp />
                
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ marginTop: 10 , borderRadius:15}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{background:"#FF3019", borderRadius:10}}
              >
                <Typography className={classes.heading} style={{color:"#ffffff",textAlign:"center",width:"100%"}}>Project Profile Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
               
                 <AcProjExp/>
                
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ marginTop: 10 , borderRadius:15}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{background:"#FF3019", borderRadius:10}}
              >
                <Typography className={classes.heading} style={{color:"#ffffff",textAlign:"center",width:"100%"}}>Learning Profile</Typography>
              </AccordionSummary>
              <AccordionDetails>
               
                 <AcLearnPro/>
                
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ marginTop: 10 , borderRadius:15}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{background:"#FF3019", borderRadius:10}}
              >
                <Typography className={classes.heading} style={{color:"#ffffff",textAlign:"center",width:"100%"}}>Career & Successor</Typography>
              </AccordionSummary>
              <AccordionDetails>
               
                 <AcCareer/>
                
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ marginTop: 10 , borderRadius:15}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{background:"#FF3019", borderRadius:10}}
              >
                <Typography className={classes.heading} style={{color:"#ffffff",textAlign:"center",width:"100%"}}>Performance Potential</Typography>
              </AccordionSummary>
              <AccordionDetails>
               
                 <AcPerform/>
                
              </AccordionDetails>
            </Accordion>
            
            
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
