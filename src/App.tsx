import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Orders from './components/Orders';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/admin' element={ <Admin/> }/>
        <Route path='/orders' element={ <Orders/> }/>
        <Route path='/menu' element={ <Menu/> }/>
      </Routes>
    </div>
  );
}

export default App;
