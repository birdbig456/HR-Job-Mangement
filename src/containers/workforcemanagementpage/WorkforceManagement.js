import React, { useState } from "react";
import ReactDOM from "react-dom";
import DragItem from "./component/drag-item";
import DropItem from "./component/drop-item";
import "./styles.css";
const todos = {
  1: {
    text: "First thing",
    state: "box1"
  },
  2: {
    text: "Second thing",
    state: "box1"
  },
  3: {
    text: "Third thing",
    state: "box1"
  },
  4: {
    text: "Fourth thing",
    state: "box1"
  }
};

export default function WorkforceManagement() {
  const [todoValues, setValue] = useState(todos);
  return (
    <div className="App">
      <div className="box">
        <DropItem
          heading="Box1"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "box1";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "box1")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
        <DropItem
          heading="Box2"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "box2";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "box2")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
        <DropItem
          heading="Box3"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "box3";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "box3")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
        <DropItem
          heading="Box4"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "box4";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "box4")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
        <DropItem
          heading="Box5"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "box5";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "box5")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
        <DropItem
          heading="Box6"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "box6";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "box6")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
        <DropItem
          heading="Box7"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "box7";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "box7")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
        <DropItem
          heading="Box8"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "box8";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "box8")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
        <DropItem
          heading="Box9"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "box9";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "box9")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
      </div>
    </div>
  );
}
