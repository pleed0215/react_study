import React, { useState, useRef, useEffect, useCallback } from "react";
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
  FormField,
  CheckBox,
  Markdown,
} from "grommet";
import TodoItem from "./TodoItem";

const createBulkTodo = () => {
  const array = [];
  for (let i = 0; i < 2500; i++) {
    array.push({
      id: Date.now(),
      item: `A thing todo number ${i}`,
      check: false,
    });
  }
  return array;
};

const TodoList = ({ todos, onRemove }) => {
  return (
    <List
      primaryKey="item"
      data={todos}
      children={(item, index) => {
        return <TodoItem item={item} onRemove={onRemove} />;
      }}
    />
  );
};

const TodoTemplate = () => {
  const theme = {
    global: {
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  };
  const [todoInput, setTodoInput] = useState({});
  const [todoList, setTodoList] = useState(createBulkTodo);
  const textInput = useRef();
  const onRemove = useCallback((id) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onChangeInput = useCallback((nextValue) => {
    setTodoInput(nextValue);
  }, []);

  return (
    <Grommet theme={theme} full>
      <Box fill justify="center" align="center" background="status-disabled">
        <Box width="70%" height="70vh">
          <Box
            height="15%"
            background="status-ok"
            justify="center"
            align="center"
            round={{ size: "medium", corner: "top" }}
          >
            <Heading level={2} textAlign="center" color="light-1">
              Todo List with Grommet
            </Heading>
          </Box>
          <Form
            onChange={onChangeInput}
            onSubmit={({ _, __ }) => {
              const { todo } = todoInput;
              textInput.current.value = "";
              setTodoInput({});
              if (todo && todo.length > 0) {
                setTodoList([
                  ...todoList,
                  { id: Date.now(), item: todo, check: false },
                ]);
              }
            }}
            onReset={() => {
              setTodoInput({});
            }}
            validate="submit"
          >
            <Box
              background="white"
              direction="row"
              height="80px"
              border
              justify="center"
              align="center"
            >
              <Box basis="2/3" margin="xsmall">
                <TextInput
                  ref={textInput}
                  fill
                  name="todo"
                  placeholder="Write you wanna to do"
                />
              </Box>
              <Box basis="1/3" margin="xsmall">
                <Button fill type="submit" primary label="Add List" />
              </Box>
            </Box>
          </Form>
          <Box
            fill
            overflow="scroll"
            background="white"
            round={{ size: "medium", corner: "bottom" }}
          >
            <TodoList
              todos={todoList}
              state={setTodoList}
              onRemove={onRemove}
            />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

function App() {
  return <TodoTemplate />;
}

export default App;
