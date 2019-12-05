import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Interview from './components/Interview';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/post-read-interview' component={Interview} />
    </div>
  );
}

export default App;
