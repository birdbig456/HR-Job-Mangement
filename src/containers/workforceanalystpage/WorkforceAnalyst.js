import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ManAct from "./contents/ManAct"
import BudgetVsLabour from "./contents/BudgetVsLabour"
import Pyramid from "./contents/Pyramid"
import ManpowerVsActual from "./contents/ManpowerVsActual"
import Scatter from "./contents/Scatter"
import TrendLabour from "./contents/TrendLabour"

export default function WorkforceAnalyst() {
    return (
        <Grid container>
            <Grid xs={12} sm={12} style={{textAlign:"center"}}>
                <h3 style={{fontSize:20,color: "#385A7C"}}>Workforce Analytic Overall</h3>
            </Grid>
            <Grid xs={12} sm={6}  style={{marginTop:15}}>
                <ManAct/>
            </Grid>
            <Grid xs={12} sm={6}  style={{marginTop:15}}>
                <BudgetVsLabour/>
            </Grid>
            <Grid xs={12} sm={6}  style={{marginTop:15}}>
                <Pyramid/>
            </Grid>
            <Grid xs={12} sm={6}  style={{marginTop:15}}>
                <ManpowerVsActual/>
            </Grid>
            <Grid xs={12} sm={6}  style={{marginTop:15}}>
                <Scatter/>
            </Grid>
            <Grid xs={12} sm={6}  style={{marginTop:15}}>
                <TrendLabour/>
            </Grid>
        </Grid>
    )
}
