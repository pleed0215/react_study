import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Grommet,
  Box,
  Button,
  Heading,
  TextInput,
  Collapsible,
  ResponsiveContext,
  Header,
  Footer,
  Main,
  List,
  Form,
  FormField
} from "grommet";
import { Home } from "grommet-icons";

const TodoList = ({ todos }) => {
  return (
    <List primaryKey="todo"
      data={todos} />
  );
}

const TodoTemplate = () => {
  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };
  const [todoInput, setTodoInput] = useState({});
  const [todoList, setTodoList] = useState([]);
  const textInput = useRef();

  return (
    <Grommet theme={theme} full>
      <Box fill justify="center" align="center" background="status-disabled" >
        <Box width="70%" height="70vh" >
          <Box height="15%"
            background="status-ok"
            justify="center"
            align="center"
            round={{ size: "medium", corner: "top" }}
          >
            <Heading level={2} textAlign="center" color="light-1">
              Todo List with Grommet
            </Heading>
          </Box>
          <Form onChange={nextValue => { setTodoInput(nextValue); }}
            onSubmit={({ _, __ }) => {
              const { todo } = todoInput;
              textInput.current.value = "";
              setTodoList([...todoList, { todo }]);
            }}
            onReset={() => { setTodoInput({}) }}
            validate="submit"
          >
            <Box background="white" direction="row" height="80px" border justify="center" align="center" >
              <Box basis="2/3" margin="xsmall">
                <TextInput ref={textInput} fill name="todo"
                  placeholder="Write you wanna to do" />
              </Box>
              <Box basis="1/3" margin="xsmall">
                <Button fill type="submit" primary label="Add List" />
              </Box>
            </Box>
          </Form>
          <Box fill
            overflow="scroll"
            background="white"
            round={{ size: "medium", corner: "bottom" }}>
            <TodoList todos={todoList} />
          </Box>
        </Box>
      </Box>
    </Grommet >
  )
};

function App() {


  return (
    <TodoTemplate />
  );
}

export default App;
