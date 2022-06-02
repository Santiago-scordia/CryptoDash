import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SerchCoins from './components/SerchCoins';



function App() {

  return (
    <>
    <NavBar/>
    <SerchCoins/>
    </>
  );
}

export default App;
