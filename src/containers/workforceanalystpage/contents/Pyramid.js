import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { dataSource } from "./dataPyramid/data";
import Funnel, {
  Title,
  Margin,
  Tooltip,
  Item,
  Border,
  Legend,
  Label,
  Font,
} from "devextreme-react/funnel";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import JobDepartment from "../JobDepartment"

const useStyles = makeStyles((theme) => ({
  Block: {
    background:"#ffff",
    border: "solid 1px #e5e5e5",
    borderRadius: 5,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 40,
    height: "auto",
    boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.1)",
  },
}));

export default function Pyramid() {
  const classes = useStyles();
  return (
    <Grid container>
      {/* <BrowserRouter>
      <Link 
      to="/JobDepartment">
          <p style={{ marginLeft: 40, fontSize: 16, color: "#FF3019" }}>Pyramid</p>
      </Link>
      <Switch>
        <Route exact path="/JobDepartment" component={JobDepartment} />
      </Switch>
      </BrowserRouter> */}
      <p style={{ marginLeft: 40, fontSize: 16, color: "#FF3019" }}>Pyramid</p>
      <Grid
        item
        xs={12}
        sm={12}
        className={classes.Block}
        style={{ textAlign: "center" }}
      >
        <Funnel
          id="pyramid"
          dataSource={dataSource}
          sortData={false}
          inverted={true}
          algorithm="dynamicHeight"
          palette="Harmony Light"
          argumentField="level"
          valueField="count"
          
        >
          
          <Title text="Team Composition">
            <Margin bottom={30} />
          </Title>
          <Tooltip enabled={true} />
          <Item>
            
            <Border visible={true} />
          </Item>
          <Legend visible={true} />
          <Label
            visible={true}
            horizontalAlignment="left"
            backgroundColor="none"
          >
            <Font size={16} />
          </Label>
          <Margin bottom={30} />
        </Funnel>
      </Grid>
    </Grid>
  );
}
