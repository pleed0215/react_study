import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grommet, Box, Button, Heading, TextInput, Collapsible, ResponsiveContext, Header, Footer, Main } from "grommet";
import { Home } from "grommet-icons";

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);


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
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <Grommet theme={theme} full>
      <Box fill justify="center" align="center">
        <Box width="70%" height="70vh" >
          <Box height="10%" background="status-ok" justify="center" align="center">
            <Heading level={2} textAlign="center" color="light-1">
              Todo List with Grommet
            </Heading>
          </Box>
          <Box direction="row" height="15%" border justify="center" align="center" margin={{ "vertical": "xsmall" }}>
            <Box basis="2/3" margin="xsmall">
              <TextInput fill />
            </Box>
            <Box basis="1/3" margin="xsmall">
              <Button fill label="Add List" />
            </Box>
          </Box>
          <Box border={{ "side": "left|right" }} fill>

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
