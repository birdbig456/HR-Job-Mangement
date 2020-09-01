import React from 'react'
import { Grid, Paper } from '@material-ui/core'

export default function AcEducation(){
    return (
        
        <Grid container>
            <Grid item xs={6} sm={6} style={{fontSize:16},{lineHeight:5}}>
                  <div style={{marginLeft:60}}>Job Group : </div>
                  <div style={{marginLeft:60}}>Sub Job Group : </div>
                  <div style={{marginLeft:60}}>Job position : </div>
                  <div style={{marginLeft:60}}>Department : </div>
                  <div style={{marginLeft:60}}>Job group : </div>
              </Grid>
              <Grid item xs={6} sm={6} style={{fontSize:16},{lineHeight:5}}>
                  <div style={{marginLeft:60}}>Job Level (JE) : </div>
                  <div style={{marginLeft:60}}>Job Classificate : </div>
            <Grid container>
            <Grid item xs={6} sm={6}>
                  <div style={{marginLeft:60}}>TIG : </div>
                  <div style={{marginLeft:60}}>ESY : </div>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                  <div style={{marginLeft:60}}>TIP : </div>
                  <div style={{marginLeft:60}}>Service : </div>
                  </Grid>
            </Grid>
            </Grid>
        </Grid>
        
             
        
    )
}
