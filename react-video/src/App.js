import React from 'react';
import Video from './small.mp4';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <ReactPlayer url={Video} playing controls />
    </div>
  );
}

export default App;
