import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Text, Box, Avatar, TextField, Button } from "gestalt";
import "gestalt/dist/gestalt.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const todoItemRef = useRef();

  const handleAddBtnClick = () => {
    setTodos([...todos, { todo: todoItem, key: Date.now() }]);
    setTodoItem("");
    console.log(todos);
  };

  const handleRemoveBtnClick = () => {
    console.log(todos);
    setTodos(todos.splice(todos.length, 1));
  };

  useEffect(() => {
    console.log("effect");
  });

  return (
    <Box>
      <Box
        alignItems="center"
        display="flex"
        direction="row"
        marginStart={5}
        marginEnd={5}
        marginTop={5}
      >
        <Box paddingX={1} display="flex" direction="row">
          <Box paddingX={2}>
            <TextField
              ref={todoItemRef}
              onChange={({ value }) => {
                setTodoItem(value);
              }}
              name="todoitem"
              placeholder="Write your item."
              value={todoItem}
            />
          </Box>
          <Button onClick={handleAddBtnClick} text="Add to list" inline />
          <Button
            onClick={handleRemoveBtnClick}
            text="Remove the last"
            inline
          />
        </Box>
      </Box>
      <Box marginStart={5} display="flex" direction="column">
        <Text>{todos.length + " todo"}</Text>
        {todos.map((item) => {
          return <Text key={item.key}>{item.todo}</Text>;
        })}
      </Box>
    </Box>
  );
}

export default App;
