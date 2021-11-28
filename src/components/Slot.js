import logo from '../../src/logo.svg';
import './css/spinner.css';

/* Component is a css animation experiment, kept as a record */

export default function Slot(){
    return (
        <div id="stage" style={{ height: "160px"}}>
            <div id="spinner" style={{transformOrigin: "100px 0 0"}}>
                <img src={logo} style={{transform: "rotateY(0deg) translateZ(137px)", padding: "0px 0 0 0px"}}  width="200" height="160" alt=""/>
                <img src={logo} style={{transform: "rotateY(-72deg) translateZ(137px)", padding: "0px 0 0 0px"}}  width="200" height="160" alt=""/>
                <img src={logo} style={{transform: "rotateY(-144deg) translateZ(137px)", padding: "0px 0 0 0px"}}  width="200" height="160" alt=""/>
                <img src={logo} style={{transform: "rotateY(-216deg) translateZ(137px)", padding: "0px 0 0 0px"}}  width="200" height="160" alt=""/>
                <img src={logo} style={{transform: "rotateY(-288deg) translateZ(137px)", padding: "0px 0 0 0px"}}  width="200" height="160" alt=""/>
            </div>
        </div>
    );
}
/* Source https://www.the-art-of-web.com/css/3d-transforms/ */
