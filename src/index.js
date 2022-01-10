import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'wouter';
import GifGrid from './components/GifGrid/GifGrid';
import './index.css';
import Home from './Pages/home';

ReactDOM.render(
  <React.StrictMode>
   <Home />
    <Route 
    path="/search/:keyword" 
    component={GifGrid}/>
  </React.StrictMode>,
  document.getElementById('root')
);

