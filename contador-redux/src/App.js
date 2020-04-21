import React from 'react';
import './App.css';
import store from './redux/store';
import {increment} from './redux/contador/contador-actions';

function App() {
  return (
    <div className="App">
      {store.getState().contador}
      <button onClick={() => store.dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
