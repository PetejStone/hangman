import React, { useState, useEffect , Component} from 'react';
import './Home.css';

const Keyboard= (props) =>  { 
    const originalWord = props.originalWord;
    const lives = props.lives;
    const lettersGuessed = props.lettersGuessed;
    const word = props.word
    const letterPressed = (e) => {
        console.log(e, lives);
        if (word.includes(e.toLowerCase())) {
            console.log('true');
         } else {
            lives = 3
         }
    }
    return (
        <div className="keyboard">
                    <div className="rowone">
                    <button onClick={props.letterPressed}>Q</button>
                        <button onClick={(e) => letterPressed(e = 'q')}>Q</button>
                        <button onClick={(e) => letterPressed(e = 'w')}>W</button>
                        <button onClick={(e) => letterPressed(e = 'e')}>E</button>
                        <button onClick={(e) => letterPressed(e = 'r')}>R</button>
                        <button onClick={(e) => letterPressed(e = 't')}>T</button>
                        <button onClick={(e) => letterPressed(e = 'y')}>Y</button>
                        <button onClick={(e) => letterPressed(e = 'u')}>U</button>
                        <button onClick={(e) => letterPressed(e = 'i')}>I</button>
                        <button onClick={(e) => letterPressed(e = 'o')}>O</button>
                        <button onClick={(e) => letterPressed(e = 'p')}>P</button>
                    </div>    
                    <div className="rowtwo">
                        <button onClick={(e) => letterPressed(e = 'a')}>A</button>
                        <button onClick={(e) => letterPressed(e = 's')}>S</button>
                        <button onClick={(e) => letterPressed(e = 'd')}>D</button>
                        <button onClick={(e) => letterPressed(e = 'f')}>F</button>
                        <button onClick={(e) => letterPressed(e = 'g')}>G</button>
                        <button onClick={(e) => letterPressed(e = 'h')}>H</button>
                        <button onClick={(e) => letterPressed(e = 'j')}>J</button>
                        <button onClick={(e) => letterPressed(e = 'k')}>K</button>
                        <button onClick={(e) => letterPressed(e = 'l')}>L</button>
                    </div>    
                    <div className="rowthree">
                        <button onClick={(e) => letterPressed(e = 'z')}>Z</button>
                        <button onClick={(e) => letterPressed(e = 'x')}>X</button>
                        <button onClick={(e) => letterPressed(e = 'c')}>C</button>
                        <button onClick={(e) => letterPressed(e = 'v')}>V</button>
                        <button onClick={(e) => letterPressed(e = 'b')}>B</button>
                        <button onClick={(e) => letterPressed(e = 'n')}>N</button>
                        <button onClick={(e) => letterPressed(e = 'm')}>M</button>
                    </div>    
                <button></button>
                </div>
    )
}

export default Keyboard;