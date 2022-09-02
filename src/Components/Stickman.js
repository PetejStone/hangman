import React, { useState, useEffect , Component} from 'react';
import './Home.css';

const Stickman = () =>  { 
    const closePopup = () => {
        console.log('hello')
        document.querySelector('.wrapperParent').classList.remove('active')
    }
    return (
        <div className="wrapperParent">
        <div class="wrapper">
            <div className="headParent"><div class="head"></div></div>
            <div className="torsoParent"><div className="torso"></div></div>
            <div className="leftarmParent"><div className="leftarm"></div></div>
            <div className="rightarmParent"><div className="rightarm"></div></div>
            <div className="leftlegParent"> <div className="leftleg"></div></div>
        
            <div className="rightlegParent"> <div className="rightleg"></div></div>

            <div className="barone"></div>
            <div className="bartwo"></div>
            <div className="barthree"></div>
            <div className="ropeParent"><div className="rope"></div></div>
         </div>
         <button id="Continue" onClick={(() => closePopup())}>Guess Again</button>
    </div>
    )
}

export default Stickman;