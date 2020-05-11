import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { TableOfContents } from "./toc"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to={"/toc"}> Table Of Contents</Link>
          </header>
        </div>
      </Route>
      <Route path="/toc">
        <TableOfContents />
      </Route>
    </Router>
  );
}

export default App;
