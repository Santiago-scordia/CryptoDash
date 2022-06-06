import './App.css';
import React, {useState} from 'react';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SerchCoins from './components/SerchCoins';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./utils/themes.js";
import { Button } from 'react-bootstrap';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
    <NavBar/>
    <Button onClick={() => themeToggler()} variant="outline-dark" className='buttontheme' size='sm'>Dark/Light</Button>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <SerchCoins/>
      </StyledApp>
    </ThemeProvider>
    </>
  );
}

export default App;
