import React from 'react';
import Login from './components/login/index.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
);
}

export default App;
