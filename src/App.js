import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Users from './views/Users';
import Gallery from './views/Gallery';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import useWindowDimensions from './hooks/WindowDimensions';

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div className="app" style={{backgroundColor:'#1D1D1F',width:width,height:height}}>
      <Router>
          <Navbar/>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/gallery">
              <Gallery variant="canvas3d" />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

/* COLOR PALETTE

text
#916840
darktext
#54402E
background
#1D1D1F

*/