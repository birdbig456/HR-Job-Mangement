import { Grid } from "@material-ui/core";
import React from "react";

export default function StatusView() {
  return (
    <Grid item style={{ marginTop:20,marginBottom:20, marginLeft:30,marginRight:30 }}>
      <div style={{ textAlign: "center"}}>
        <label
          style={{
            backgroundColor: "#26A69A",
            fontSize: 16,
            padding: 10,
            border: 0,
            borderRadius: 5,
            color: "#fff",
          }}
        >
          Division
        </label>
      </div>
      <div style={{display:"flex", justifyContent:"space-between" , marginBottom:20 , marginTop:20}}>
          <p>Production PE</p>
          <p>3</p>
      </div>

      <div style={{ textAlign: "center"}}>
        <label
          style={{
            backgroundColor: "#26A69A",
            fontSize: 16,
            padding: 10,
            border: 0,
            borderRadius: 5,
            color: "#fff",
          }}
        >
          Department / Section
        </label>
      </div>
      <div style={{ marginBottom:20 , marginTop:20}}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
          <p>HD 1 Production</p>
          <p>4</p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
          <p>HD 2 Production</p>
          <p>4</p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
          <p>HD 3 Production</p>
          <p>3</p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
          <p>HD 4 Production</p>
          <p>2</p>
      </div>
      </div>

      <div style={{ textAlign: "center"}}>
        <label
          style={{
            backgroundColor: "#26A69A",
            fontSize: 16,
            padding: 10,
            border: 0,
            borderRadius: 5,
            color: "#fff",
          }}
        >
          Production
        </label>
      </div>
      <div style={{ marginBottom:20, marginTop:20}}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
          <p>LLDPE 1</p>
          <p>5</p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
          <p>LLDPE 2</p>
          <p>4</p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
          <p>LLDPE 3</p>
          <p>2</p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
          <p>LLDPE 4</p>
          <p>4</p>
      </div>
      </div>
      <div style={{textAlign:"right"}}>
        <p>Total workforce seat : </p>
        <label
          style={{
            backgroundColor: "#26A69A",
            fontSize: 16,
            padding: 10,
            border: 0,
            borderRadius: 5,
            color: "#fff",
          }}
        >
          30
        </label>
        
      </div>
    </Grid>
  );
}
