import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function Navbar(){
    const BRAND_LOGO = "Tatolio";

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
            </div>

        </li>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/" style={{marginLeft:'10px'}}>{BRAND_LOGO}</Link>
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
    );
}