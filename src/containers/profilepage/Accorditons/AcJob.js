import React from "react";
import { Grid, Paper } from "@material-ui/core";

export default function AcJob() {
  return (
    <Grid container style={{marginInline:"16%"}}>
      <Grid item xs={6} sm={6} style={({ lineHeight: 4 })}>
        <Grid container>
        <Grid item xs={6} sm={6} style={{color:"#385a7c",fontWeight:"bold",fontFamily:"",fontSize:16}}>
        <div style={{ marginLeft: 60 }}>Job Group : </div>
        <div style={{ marginLeft: 60 }}>Sub Job Group : </div>
        <div style={{ marginLeft: 60 }}>Job position : </div>
        <div style={{ marginLeft: 60 }}>Department : </div>
        <div style={{ marginLeft: 60 }}>Section : </div>
        </Grid>
        <Grid item xs={6} sm={6} style={{fontSize:16,color:"#828282"}}>
        <div style={{ }}>Human Resource</div>
        <div style={{ }}>HRBP</div>
        <div style={{ }}>HRBP Manager</div>
        <div style={{ }}>HRBP Polyolefins</div>
        <div style={{ }}>HRBP Polyolefins</div>
        </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} sm={6} style={( { lineHeight: 4 })}>
        <Grid container>
          <Grid item xs={6} sm={6} style={{color:"#385a7c",fontWeight:"bold",fontFamily:"",fontSize:16}}>
          <div style={{ marginLeft: 60 }}>Job Level (JE) : </div>
        <div style={{ marginLeft: 60 }}>Job Classificate : </div>
          </Grid>
          <Grid item xs={6} sm={6} style={{fontSize:16,color:"#828282"}}>
          <div style={{}}>36</div>
        <div style={{}}>4</div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={6} sm={6}>
            <Grid container>
            <Grid item xs={6} sm={6} style={{color:"#385a7c",fontWeight:"bold",fontFamily:"",fontSize:16}}>
            <div style={{ marginLeft: 60 }}>TIG : </div>
            <div style={{ marginLeft: 60 }}>ESY : </div>
            </Grid>
            <Grid item xs={6} sm={6} style={{fontSize:16,color:"#828282"}}>
            <div style={{ }}>36</div>
            <div style={{ }}>4</div>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6}>
          <Grid container>
            <Grid item xs={6} sm={6} style={{color:"#385a7c",fontWeight:"bold",fontFamily:"",fontSize:16}}>
            <div style={{ marginLeft: 60 }}>TIP : </div>
            <div style={{ marginLeft: 60 }}>Service : </div>
            </Grid>
            <Grid item xs={6} sm={6} style={{fontSize:16,color:"#828282"}}>
            <div style={{ }}>3/0</div>
            <div style={{ }}>14/1</div>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
