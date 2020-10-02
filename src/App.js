import React from 'react';
import Nav from './sections/Nav'
import Routes from './Routes'
import Footer from './sections/Footer'
import Intro from './sections/Intro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Work from './sections/Work'
import Contact from './sections/Contact'
import About from './sections/AboutMe'

import './App.css';


function App() {
  return (
    <>
    <Nav />
    
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Intro}/>
                <Route exact path="/work" component={Work}/>
                <Route exact path="/contact"component={Contact} />
            </Switch>
    
    <Footer />
   </>
  
  );
}

export default App;
