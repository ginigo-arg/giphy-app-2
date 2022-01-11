import React, { Suspense } from "react"
import {Link, Route} from 'wouter'
import Home from "./Pages/home"
import SearchResults from "./Pages/SerchResults"
import StaticContext from './context/StaticContext'
import Detail from "./Pages/detail/index"
import  {GifsContextProvider}  from "./context/GifsContext"
import Logo from './logo-app.png'
import './App.css'

export default function App (){
    return (
    <StaticContext.Provider value={{name:'Gabudev',
    canal:true}}>
        <div className="App">
            <Suspense fallback={null}/>
        <section className="App-content">
            <Link to='/'>
            <figure className="App-logo">
                <img alt='Giffi logo' src={Logo}/>
            </figure>
            </Link>
        <GifsContextProvider>
            <Route 
        component={Home}
        path="/" />
    
        <Route 
          component={SearchResults}
          path="/search/:keyword"/>
        
        <Route 
          component={Detail}
          path="/gif/:id"/>
        </GifsContextProvider>        
        </section>    

        </div>
    </StaticContext.Provider>
    
    )
}