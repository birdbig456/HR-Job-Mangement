import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    Block: {
      border: "solid 3px #e5e5e5",
      borderRadius: 5,
      marginRight:40,
      marginLeft:40,
      marginBottom: 40,
      height:"auto"
    },
  }));
  
export default function TrendLabour() {
    const [chartData, setChartData] = useState({});
    const chart = () =>{
      setChartData({
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets:[
          {
            label:'People in actual',
            data:[898,636,711,545,633,113,480,245,100,200,250,190],
            backgroundColor:[
              'rgba(75,192,192,0.6)'
            ],
            borderWidth:4
          }
        ]
      })
    }
    useEffect(() => {
      chart()
    }, [])
    const classes = useStyles();
    return (
        <Grid container >
            <p style={{marginLeft:40,fontSize:16,color:"#FF3019"}}>Trend Labour</p>
         <Grid  item xs={12} sm={12} className={classes.Block} style={{textAlign:"center"}}>
           <Line data={chartData} />
         </Grid>
         
        </Grid>
    )
}
