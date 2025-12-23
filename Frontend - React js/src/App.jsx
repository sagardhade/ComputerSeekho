import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Home from './Components/Home.jsx';
import CardContainer from './Components/CardContainer.jsx';
import Footer from './Components/Footer.jsx';
function App() {
  return (
    <>
      <div className="container">

        <h1 className="text-center">Welcome to ComputerSeekho</h1>
        <br/>
        <Home/>
        <br/>
        <CardContainer/>
        <Outlet></Outlet>
        <Footer/>
      </div>
    </>
  );
}

export default App;
