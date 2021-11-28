import React, {useState, useEffect} from 'react';
import RouteTemplate from "./RouteTemplate";
import "./css/home.css";

export default function Home(){
    return (
        <RouteTemplate>
            <div className="centered padded bordered purpled cornered">
                <h2>Hi, my name is Thomas and I'm not sure what my purpose is yet.</h2>
                <br/>
                <br/>
                <p>These pages will hopefully help me find it, or be part of another meaningless chapter in the book of chaos I call my life</p>
                <br/>
                <br/>
                <p>Here's me in puppy form:</p>
            </div>
            <div className="centered bordered-purple cornsilked cornered">
                <img src="https://i.imgur.com/C3ZVeOM.jpeg" alt="cute puppy bringing you flowers"/>
            </div>
        </RouteTemplate>
    );
}