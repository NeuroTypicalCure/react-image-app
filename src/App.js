import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardBoard from './components/CardBoard';
import Canvas3D from './components/Canvas3D';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  function Dropdown(props){
    const [dropState, setDropState] = useState(false);
    const onDropdownClick = (e) => {
      setDropState(!dropState);
    };

    // if true it adds " show" to the className
    const isShowDropdownMenu = `dropdown-menu${dropState ? " show" : ""}`;

    return (
      <li className="nav-item dropdown">

        {/* BUTTON */}
        <a className="nav-link dropdown-toggle"
          onClick={onDropdownClick}
          id="navbarDropdown" role="button" data-toggle="dropdown" 
          aria-haspopup="true" aria-expanded="false"
        >Browse</a>

        {/* MENU */}
        <div className={isShowDropdownMenu} aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/gallery">Gallery</Link>
          <Link className="dropdown-item" to="/gallery3d">3D Gallery</Link>
        </div>

      </li>
    );
  }
  return (
    <Router>
      <div className="app" style={{backgroundColor:'#1D1D1F'}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/" style={{marginLeft:'10px'}}>Image-App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li>
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <Dropdown/>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/gallery">
            <Home />
          </Route>
          <Route path="/gallery3d">
            <Gallery3D />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function RouteTemplate(props){
  return (<div className="route-body" style={{margin:'0.4em 0.2em 0.4em 0.2em',padding:'1em',backgroundColor:'#1D1D1F'}}>
    {props.children}
  </div>);
}

function Home() {
  return (
    <RouteTemplate>
      <h2>Home</h2>
    </RouteTemplate>
  );
}



function Gallery3D(props) {
  // use state hooks
  const [query, setQuery] = useState('boat');
  const [value, setValue] = useState('boat');
  const [cards, setCards] = useState([]);
  
  // use effect hook: when [dependencies] change -> (re-render)
  useEffect(() => {
    console.log("rerender");
    function getPieces() {
        axios.get(`http://localhost:5000/getMetMuseumSearch/${query}`).then(items=>{
          console.log("items data: "+items.data);
          setCards(items.data);
        }).catch(e=>console.log(e));
    }getPieces();
    return function cleanup() {
      setCards([]);
    }
  }, [query]);

  // event listeners
  const onClick = () => setQuery(value);

  return (
    <RouteTemplate>
      <header className="app-header">
        <input value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={onClick}>Search</button>
        <Canvas3D items={cards}/>
      </header>
    </RouteTemplate>
  );
}

function About() {
  return (
    <RouteTemplate>
      <h2>About</h2>
    </RouteTemplate>
  );
}

function Users() {
  return (
    <RouteTemplate>
      <h2>Users</h2>
    </RouteTemplate>
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