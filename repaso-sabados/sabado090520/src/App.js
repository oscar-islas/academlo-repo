import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Chat from "./components/chat/chat-component";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>      
      <Switch>
        <Route path="/conversation/:id" children={<Chat />} />
      </Switch>
    </BrowserRouter>
  )
}
