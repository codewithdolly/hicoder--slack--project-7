import React from 'react';
import './App.scss';
import { HomePage, SlackBody } from './Components/Project/Index';
import Sidebar from './Components/Project/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <HomePage />
      <SlackBody />
      
    </div>
  );
}

export default App;
