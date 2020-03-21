import React from 'react';
import './App.css';
import {
  BrowserRouter as Router 
} from "react-router-dom";

import Header from './components/header/header-component';
import Routes from './components/routes/routes-component';

function App() {
  return (
    <Router>
      <div>
        <Header />        
        <Routes />
      </div>
    </Router>
  );
}

export default App;
