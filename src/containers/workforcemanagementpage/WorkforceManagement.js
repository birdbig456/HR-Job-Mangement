import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box } from "@material-ui/core";
import ReactDOM from "react-dom";
import DragItem from "./component/drag-item";
import DropItem from "./component/drop-item";
import "./styles.css";
import { bindActionCreators } from "redux";

const todos = {
  1: {
    text: "First ",
    state: "box1",
  },
  2: {
    text: "Second ",
    state: "box1",
  },
  3: {
    text: "Third ",
    state: "box1",
  },
  4: {
    text: "Fourth ",
    state: "box1",
  },
};
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
    paddingTop: 20,
    paddingBottom: 20,
    background: "#fff6e6",
    border: "0px",
    borderRadius: 15,
    margin: 5,
    marginLeft: 0,
    textAlign: "center",
    color: "#385a7c",
  },
}));

export default function WorkforceManagement() {
  const [todoValues, setValue] = useState(todos);
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

        <Grid item sm={7} sm={7}>
          <Card style={{ marginRight: 5, paddingBottom: 15, borderRadius: 15 }}>
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
                  <h4 style={{ margin: 0, marginTop: 10, color: "#535353" }}>
                    C1-Strong Performers
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10, color: "#13b5ea" }}>
                    22
                  </h4>
                </Grid>
                <DropItem
                  onDrop={(id) => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "box1";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}

                >
                  {Object.keys(todoValues)
                    .map((key) => ({ id: key, ...todoValues[key] }))
                    .filter((todo) => todo.state === "box1")
                    .map((todo) => (
                      <DragItem id={todo.id} data={todo} key={todo.id} />
                    ))}
                </DropItem>
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
                  <h4 style={{ margin: 0, marginTop: 10, color: "#535353" }}>
                    B1-Key Talent 3
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10, color: "#13b5ea" }}>
                    22
                  </h4>
                </Grid>
                <DropItem
                  onDrop={(id) => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "box2";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map((key) => ({ id: key, ...todoValues[key] }))
                    .filter((todo) => todo.state === "box2")
                    .map((todo) => (
                      <DragItem id={todo.id} data={todo} key={todo.id} />
                    ))}
                </DropItem>
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
                  <h4 style={{ margin: 0, marginTop: 10, color: "#535353" }}>
                  A1-Key Talent 1
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10, color: "#13b5ea" }}>
                    22
                  </h4>
                </Grid>
                <DropItem
                  onDrop={(id) => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "box3";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map((key) => ({ id: key, ...todoValues[key] }))
                    .filter((todo) => todo.state === "box3")
                    .map((todo) => (
                      <DragItem id={todo.id} data={todo} key={todo.id} />
                    ))}
                </DropItem>
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
                  <h4 style={{ margin: 0, marginTop: 10, color: "#535353" }}>
                    C2-Contributors
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10, color: "#13b5ea" }}>
                    22
                  </h4>
                </Grid>
                <DropItem
                  onDrop={(id) => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "box4";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map((key) => ({ id: key, ...todoValues[key] }))
                    .filter((todo) => todo.state === "box4")
                    .map((todo) => (
                      <DragItem id={todo.id} data={todo} key={todo.id} />
                    ))} 
                    
                </DropItem>
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
                  <h4 style={{ margin: 0, marginTop: 10, color: "#535353" }}>
                    B2-Solid Contributors
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10, color: "#13b5ea" }}>
                    22
                  </h4>
                </Grid>
                <DropItem
                  onDrop={(id) => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "box5";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map((key) => ({ id: key, ...todoValues[key] }))
                    .filter((todo) => todo.state === "box5")
                    .map((todo) => (
                      <DragItem id={todo.id} data={todo} key={todo.id} />
                    ))}
                </DropItem>
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
                  <h4 style={{ margin: 0, marginTop: 10, color: "#535353" }}>
                    A2-Key Talent 2
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10, color: "#13b5ea" }}>
                    22
                  </h4>
                </Grid>
                <DropItem
                  onDrop={(id) => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "box6";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map((key) => ({ id: key, ...todoValues[key] }))
                    .filter((todo) => todo.state === "box6")
                    .map((todo) => (
                      <DragItem id={todo.id} data={todo} key={todo.id} />
                    ))}
                </DropItem>
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
                  <h4 style={{ margin: 0, marginTop: 10, color: "#535353" }}>
                    C3-Need Improvement
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10, color: "#13b5ea" }}>
                    22
                  </h4>
                </Grid>
                <DropItem
                  onDrop={(id) => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "box7";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map((key) => ({ id: key, ...todoValues[key] }))
                    .filter((todo) => todo.state === "box7")
                    .map((todo) => (
                      <DragItem id={todo.id} data={todo} key={todo.id} />
                    ))}
                </DropItem>
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
                  <h4 style={{ margin: 0, marginTop: 10, color: "#535353" }}>
                    B3-Watch List
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10, color: "#13b5ea" }}>
                    22
                  </h4>
                </Grid>
                <DropItem
                  onDrop={(id) => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "box8";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map((key) => ({ id: key, ...todoValues[key] }))
                    .filter((todo) => todo.state === "box8")
                    .map((todo) => (
                      <DragItem id={todo.id} data={todo} key={todo.id} />
                    ))}
                </DropItem>
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
                  <h4 style={{ margin: 0, marginTop: 10, color: "#535353" }}>
                    C3-Reassign
                  </h4>
                  <h4 style={{ margin: 0, marginTop: 10, color: "#13b5ea" }}>
                    22
                  </h4>
                </Grid>
                <DropItem
                  onDrop={(id) => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "box9";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map((key) => ({ id: key, ...todoValues[key] }))
                    .filter((todo) => todo.state === "box9")
                    .map((todo) => (
                      <DragItem id={todo.id} data={todo} key={todo.id} />
                    ))}
                </DropItem>
              </Grid>

            </Grid>
          </Card>
        </Grid>

        <Grid item sm={5} sm={5}>
        <Card style={{ marginLeft: 5,borderRadius: 15,}}>
            <Grid container >
              <Grid
                item
                sm={12}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#ffff",
                  background:"#13b5ea",
                  letterSpacing:"1px",
                  fontFamily: "Oswald",
                }}
              >
                <h3 style={{ marginLeft: 17 }}>Classes Percentage</h3>
              </Grid>
              <Grid container style={{padding:"15px 0px"}}>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#385a7c", fontFamily: "Oswald",margin:0 ,marginTop:7}}>C1</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#385a7c", fontFamily: "Oswald",margin:0 ,marginTop:7}}>B1</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#385a7c", fontFamily: "Oswald",margin:0 ,marginTop:7}}>A1</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#385a7c", fontFamily: "Oswald",margin:0 ,marginTop:7}}>C2</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#385a7c", fontFamily: "Oswald",margin:0 ,marginTop:7}}>B2</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#385a7c", fontFamily: "Oswald",margin:0 ,marginTop:7}}>A2</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#385a7c", fontFamily: "Oswald",margin:0 ,marginTop:7}}>C3</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#385a7c", fontFamily: "Oswald",margin:0 ,marginTop:7}}>B3</h3>
                </Grid>
                <Grid item sm={3} xs={3}>
                    <div className={classes.RightBlock}>
                        <Box>0.00 %</Box>
                        <Box>0 persons</Box>
                    </div>
                </Grid>
                <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#385a7c", fontFamily: "Oswald",margin:0 ,marginTop:7}}>A3</h3>
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
