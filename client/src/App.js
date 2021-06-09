import './App.css';
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';

const App = () => {
    return (
        <>
            <Router>
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/">
                        <Error />
                    </Route>
                    
                </Switch>
            </Router>
        </>
    )
}

export default App;
