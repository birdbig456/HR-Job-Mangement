import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles((theme) => ({
    
    
  }));

export default function WorkforceManagement() {
    return (
        <div style={{ backgroundColor: "#FAFAFA", padding: 20 }}>
        <Grid container>
            <Grid item sm={12} xs={12}style={{textAlign:"center",marginBottom:25}}>
                <h3 style={{fontSize:28,color: "#385A7C",fontFamily:"Oswald"}}>Workforce Management</h3>
            </Grid>
            <Grid item sm={8} xs={8}>
                <Card>
                <CardContent>
                    xxx
                </CardContent>
                </Card>
                
            </Grid>
            <Grid item sm={4} xs={4}>
            <Card>
                <CardContent>
                    xxx
                </CardContent>
                </Card>
            </Grid>

        </Grid>
        </div>
    )
}
