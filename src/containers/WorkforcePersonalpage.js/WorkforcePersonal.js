import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

export default function WorkforcePersonal() {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} style={{textAlign:"center",marginBottom:25}}>
                <h3 style={{fontSize:28,color: "#385A7C",fontFamily:"Oswald"}}>Workforce Analytic Personal Job</h3>
            </Grid>

        </Grid>
    )
}
