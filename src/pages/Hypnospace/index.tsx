import React from 'react';
import './Hypnospace.scss';

import raptorGif from './Assets/raptor.webp';
import animation3dGif from './Assets/3d.webp';


function HypnospacePage() {
    return (
        <div className="hypnospace-page">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
                <filter id="pixelate" x="0" y="0">
                    <feFlood x="1" y="1" height="1" width="1"/> 
                    <feComposite width="3" height="3"/>
                    <feTile result="a"/>
                    <feComposite in="SourceGraphic" in2="a" operator="in"/>
                    <feMorphology operator="dilate" radius="0.1"/>
                </filter>
                <circle r="10"></circle>
            </svg> 
            <img src={raptorGif} alt="raptor gif" className="rot-anim" style={{ marginTop: "20vh", scale: "200%" }} />
            <h1>Welcome to my website !!!</h1>
            <p>Hi my name is <i>Tom Rinaldi</i>, I like programming, science and animals.</p>
            <hr></hr>
            <img src={animation3dGif} alt="3d animation gif" style={{ margin: "100px", scale: "200%" }} />
        </div>
    );
}
/*
function AudioPlayer() {
    const music = new Audio('./Assets/07 - DM Hazebeat 001.mp3');

    return (
        <div className="audio-player" onClick={() => music.play()}>
        </div>
    );
}
*/

export default HypnospacePage;
