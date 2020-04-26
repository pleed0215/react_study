import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Text, Box, Avatar, TextField, Button } from "gestalt";
import "gestalt/dist/gestalt.css";

const useGestaltInput = (initVal, validator, inputErrMsg) => {
  const [value, setValue] = useState(initVal);
  let errorMessage = validator(value) ? "" : inputErrMsg;
  const onChange = ({ value }) => {
    setValue(value);
  };
  return { value, onChange, setValue, errorMessage };
};

const useGestaltFadeIn = () => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = "opacity 3s";
      current.style.opacity = 1;
    }
  }, []);

  return {
    ref: element,
    dangerouslySetInlineStyle: { __style: { opacity: 0 } },
  };
};

function App() {
  const [todos, setTodos] = useState([]);
  const lengthUnderTen = (value) => value.length < 10;
  const todoItem = useGestaltInput(
    "Say Hello",
    lengthUnderTen,
    "Length must be under 10"
  );
  const todoItemRef = useRef();
  const fadeIn = useGestaltFadeIn();

  const handleAddBtnClick = () => {
    setTodos([...todos, { todo: todoItem.value, key: Date.now() }]);
    todoItem.setValue("");
    console.log(todos);
  };

  const handleRemoveBtnClick = () => {
    console.log(todos);
    todos.pop();
    setTodos([...todos]);
  };

  return (
    <Box width="50%" {...fadeIn}>
      <Box
        alignItems="center"
        display="flex"
        direction="row"
        marginStart={5}
        marginEnd={5}
        marginTop={5}
        width="100%"
      >
        <Box paddingX={1} display="flex" direction="row" width="100%">
          <Box paddingX={2} width="50%">
            <TextField
              ref={todoItemRef}
              name="todoitem"
              placeholder="Write your item."
              {...todoItem}
            />
          </Box>
          <Box
            paddingX={2}
            justifyContent="evenly"
            width="100%"
            display="flex"
            direction="rows"
          >
            <Button onClick={handleAddBtnClick} text="Add to list" inline />
            <Button
              onClick={handleRemoveBtnClick}
              text="Remove the last"
              inline
            />
          </Box>
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
