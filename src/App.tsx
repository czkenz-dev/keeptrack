import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import ProjectsPage from "./projects/ProjectsPage";

function App() {
    return (
        <Router>
            <header className="sticky">
                <span className="logo">
                    <img src="/assets/logo-3.svg" alt="logo" width="49" height="99"/>
                </span>
                <NavLink to="/" exact className="button rounded">
                    <span className="icon-home"></span>
                    Home
                </NavLink>
                <NavLink to="/projects/" className="button rounded">
                    Projects
                </NavLink>
            </header>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/projects" exact component={ProjectsPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
