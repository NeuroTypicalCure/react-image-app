import React, {useState, useEffect, useRef} from 'react';
import { DirectionalLight } from 'three';
import logo from '../../src/logo.svg';
import './css/pixboard.css';

export default function Pixboard(){
    const [open,setOpen] = useState(false);

    const enlarge = (e) => {
        setOpen(!open);
    };

    return (
        <div id="pixboard" style={{ height: "600px"}}>
            {[...Array(12*24)].map(() => <img src={logo} onClick={enlarge} width="50" height="50"/>)}
            <dialog open={open} className="dialog" onClick={enlarge}>
                <img className="modal-img-large" src={logo} onClick={enlarge} width="500" height="500"/>
            </dialog>
        </div>
    );
}
/* Source https://www.the-art-of-web.com/css/3d-transforms/ */
