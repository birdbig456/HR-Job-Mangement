import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  LeftBlock: {
    width: "auto",
    height: 120,
    background: "#f3f6fc",
    border: "0px",
    borderRadius: 5,
    margin: 10,
  },
  RightBlock: {
    width: "auto",
    paddingTop:20,
    paddingBottom:20,
    background: "#f3f6fc",
    border: "0px",
    borderRadius: 15,
    margin:5,
    marginLeft:0,
    textAlign:"center",
    color:"#36a69a"


  },
}));

export default function WorkforceManagement() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <Grid container>
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
            Workforce Management
          </h3>
        </Grid>
        <Grid item sm={7} xs={7}>
          <Card style={{ marginRight: 5, paddingBottom: 15 ,borderRadius: 15,}}>
            <Grid container>
              <Grid item sm={3} xs={3}>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Oswald",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <h4 style={{ margin: 0, marginTop: 10, color: "#000000",}}>
                    C1-Strong Performers
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10,color: "#36a69a", }}>22</h4>
                </Grid>
                <Grid className={classes.LeftBlock}></Grid>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Oswald",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <h4 style={{ margin: 0, marginTop: 10, color: "#000000",}}>
                    C1-Strong Performers
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10,color: "#36a69a", }}>22</h4>
                </Grid>
                <Grid className={classes.LeftBlock}></Grid>
              </Grid>
              <Grid item sm={3} xs={3}>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Oswald",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <h4 style={{ margin: 0, marginTop: 10, color: "#000000",}}>
                    C1-Strong Performers
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10,color: "#36a69a", }}>22</h4>
                </Grid>
                <Grid className={classes.LeftBlock}></Grid>
              </Grid>
              <Grid item sm={3} xs={3}>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Oswald",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <h4 style={{ margin: 0, marginTop: 10, color: "#000000",}}>
                    C1-Strong Performers
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10,color: "#36a69a", }}>22</h4>
                </Grid>
                <Grid className={classes.LeftBlock}></Grid>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Oswald",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <h4 style={{ margin: 0, marginTop: 10, color: "#000000",}}>
                    C1-Strong Performers
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10,color: "#36a69a", }}>22</h4>
                </Grid>
                <Grid className={classes.LeftBlock}></Grid>
              </Grid>
              <Grid item sm={3} xs={3}>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Oswald",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <h4 style={{ margin: 0, marginTop: 10, color: "#000000",}}>
                    C1-Strong Performers
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10,color: "#36a69a", }}>22</h4>
                </Grid>
                <Grid className={classes.LeftBlock}></Grid>
              </Grid>
              <Grid item sm={3} xs={3}>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Oswald",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <h4 style={{ margin: 0, marginTop: 10, color: "#000000",}}>
                    C1-Strong Performers
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10,color: "#36a69a", }}>22</h4>
                </Grid>
                <Grid className={classes.LeftBlock}></Grid>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Oswald",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <h4 style={{ margin: 0, marginTop: 10, color: "#000000",}}>
                    C1-Strong Performers
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10,color: "#36a69a", }}>22</h4>
                </Grid>
                <Grid className={classes.LeftBlock}></Grid>
              </Grid>
              <Grid item sm={3} xs={3}>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Oswald",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <h4 style={{ margin: 0, marginTop: 10, color: "#000000",}}>
                    C1-Strong Performers
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10,color: "#36a69a", }}>22</h4>
                </Grid>
                <Grid className={classes.LeftBlock}></Grid>
              </Grid>
             
            </Grid>
          </Card>
        </Grid>

        <Grid item sm={5} xs={5}>
          <Card style={{ marginLeft: 5,paddingBottom:15 ,borderRadius: 15,}}>
            <Grid container>
              <Grid
                item
                sm={12}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#ff3019",
                  fontFamily: "Oswald",
                }}
              >
                <h3 style={{ marginLeft: 17 }}>Classes Percentage</h3>
              </Grid>
              <Grid item sm={12} xs={12}><hr style={{boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)",border: "solid 1px #E5E5E5"}} /></Grid>
              <Grid container>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#000000", fontFamily: "Oswald",margin:0 ,marginTop:7}}>C1</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#000000", fontFamily: "Oswald",margin:0 ,marginTop:7}}>B1</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#000000", fontFamily: "Oswald",margin:0 ,marginTop:7}}>A1</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#000000", fontFamily: "Oswald",margin:0 ,marginTop:7}}>C2</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#000000", fontFamily: "Oswald",margin:0 ,marginTop:7}}>B2</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#000000", fontFamily: "Oswald",margin:0 ,marginTop:7}}>A2</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#000000", fontFamily: "Oswald",margin:0 ,marginTop:7}}>C3</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#000000", fontFamily: "Oswald",margin:0 ,marginTop:7}}>B3</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#000000", fontFamily: "Oswald",margin:0 ,marginTop:7}}>A3</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
