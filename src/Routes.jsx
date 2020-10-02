import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Intro from './sections/Intro'
import Work from './sections/Work'
import Contact from './sections/Contact'
import About from './sections/AboutMe'


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/"><Intro /></Route>
                <Route exact path="/work"><Work /></Route>
                <Route exact path="/contact"><Contact /></Route>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;