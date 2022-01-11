import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'wouter';
import GifGrid from './components/GifGrid/GifGrid';
import { GifsContextProvider } from './context/GifsContext';
import './index.css';
import Home from './Pages/home';
import SearchResults from './Pages/SerchResults';

ReactDOM.render(
  <React.StrictMode>
    <GifsContextProvider>
    <Route 
    component={Home}
    path="/" />

    <Route 
      component={SearchResults}
      path="/search/:keyword"/>
      
    </GifsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

