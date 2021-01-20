import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/Card";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  CandidateCard: {
    background:"#ffff",
    border: 0,
    borderRadius: 2,
    width: "100%",
    margin:15,
    marginBottom:0,
    padding:8,
    paddingBottom:0,
    height:190,
    boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)",
    display:"flex",
    flexDirection:"row"
  },
}));

export default function SuccessionPlan() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <Grid container >
        <Grid
          item
          sm={12}
          xs={12}
          style={{ textAlign: "center", marginBottom: 25 }}
        >
          <h3
            style={{
              fontSize: 28,
              color: "#385A7C",
              fontFamily: "Oswald",
              marginTop: 0,
            }}
          >
            Succession Planning
          </h3>
        </Grid>
        <Grid item sm={8} xs={8} style={{border:"solid 2px #e5e5e5",background:"#F9FBF9",display:"flex",justifyContent:"center",alignItems:"center",color:"#36a69a"}}>
            <h4 >add your first node to use this.</h4>
        </Grid>

        <Grid item sm={4} xs={4}>
        <Grid container style={{background:"#e5e5e5",width:"95%",paddingBottom:15}}>
          <Grid
            item
            sm={12}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "Oswald",
              background: "#36a69a",
              color: "white",
            }}
          >
            <h3 style={{marginLeft:20}}>TALENT POOL</h3>
            <p style={{marginRight:10}}><ChevronRightOutlinedIcon/></p>
          </Grid>

          {/* card1 */}
          <div className={classes.CandidateCard}>
          <Grid item sm={3} xs={3} style={{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <img style={{height:"60%",width:"100%",paddingRight:5,paddingLeft:5,display:"flex"}} src="https://sv1.picz.in.th/images/2021/01/20/lPt88Z.png" alt="lPt88Z.png" border="0" /> 
          <h4 style={{height:"10%",marginBottom:0,marginTop:15}}>Candidate</h4>     
          <StarIcon style={{height:"10%",marginBottom:0,color:"#fec566",marginTop:0,marginInline:"auto"}}></StarIcon>
          </Grid>
          <Grid item sm={6} xs={6}>
            <h3 style={{color:"#ff3019",marginLeft:23,fontFamily:"Oswald"}}>Amad Diallo Traore</h3>
            <p style={{marginLeft:23}}>HDPE 4 Production Section..</p>
            <div style={{display:"flex",justifyContent:"space-around"}}>
              <lebel>PL</lebel>
              <lebel>Age</lebel>
              <lebel>TIP</lebel>
            </div>
            <div style={{display:"flex",justifyContent:"space-around",fontFamily: "Oswald",color:"#36a69a",fontWeight:"bold"}}>
              <p>S4</p>
              <p>19/1</p>
              <p>0/0</p>
            </div>
          </Grid>
          <Grid item sm={3} xs={3} style={{textAlign:"center"}}>
            <h4 style={{color:"#36a69a"}}>Matched</h4>
            <p>95%</p>
          </Grid>
          </div>

          {/* card2 */}
          <div className={classes.CandidateCard}>
          <Grid item sm={3} xs={3} style={{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <img style={{height:"60%",width:"100%",paddingRight:5,paddingLeft:5,display:"flex"}} src="https://sv1.picz.in.th/images/2021/01/20/lPt88Z.png" alt="lPt88Z.png" border="0" /> 
          <h4 style={{height:"10%",marginBottom:0,marginTop:15}}>Candidate</h4>     
          <StarIcon style={{height:"10%",marginBottom:0,color:"#fec566",marginTop:0,marginInline:"auto"}}></StarIcon>
          </Grid>
          <Grid item sm={6} xs={6}>
            <h3 style={{color:"#ff3019",marginLeft:23,fontFamily:"Oswald"}}>Jack Grealish</h3>
            <p style={{marginLeft:23}}>HDPE 4 Production Section..</p>
            <div style={{display:"flex",justifyContent:"space-around"}}>
              <lebel>PL</lebel>
              <lebel>Age</lebel>
              <lebel>TIP</lebel>
            </div>
            <div style={{display:"flex",justifyContent:"space-around",fontFamily: "Oswald",color:"#36a69a",fontWeight:"bold"}}>
              <p>S4</p>
              <p>24/6</p>
              <p>0/0</p>
            </div>
          </Grid>
          <Grid item sm={3} xs={3} style={{textAlign:"center"}}>
            <h4 style={{color:"#36a69a"}}>Matched</h4>
            <p>35%</p>
          </Grid>
          </div>

          {/* card3 */}
          <div className={classes.CandidateCard}>
          <Grid item sm={3} xs={3} style={{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <img style={{height:"60%",width:"100%",paddingRight:5,paddingLeft:5,display:"flex"}} src="https://sv1.picz.in.th/images/2021/01/20/lPt88Z.png" alt="lPt88Z.png" border="0" /> 
          <h4 style={{height:"10%",marginBottom:0,marginTop:15}}>Candidate</h4>     
          <StarIcon style={{height:"10%",marginBottom:0,color:"#fec566",marginTop:0,marginInline:"auto"}}></StarIcon>
          </Grid>
          <Grid item sm={6} xs={6}>
            <h3 style={{color:"#ff3019",marginLeft:23,fontFamily:"Oswald"}}>Jadon Sancho</h3>
            <p style={{marginLeft:23}}>HDPE 4 Production Section..</p>
            <div style={{display:"flex",justifyContent:"space-around"}}>
              <lebel>PL</lebel>
              <lebel>Age</lebel>
              <lebel>TIP</lebel>
            </div>
            <div style={{display:"flex",justifyContent:"space-around",fontFamily: "Oswald",color:"#36a69a",fontWeight:"bold"}}>
              <p>S4</p>
              <p>20/4</p>
              <p>0/0</p>
            </div>
          </Grid>
          <Grid item sm={3} xs={3} style={{textAlign:"center"}}>
            <h4 style={{color:"#36a69a"}}>Matched</h4>
            <p>75%</p>
          </Grid>
          </div>
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
