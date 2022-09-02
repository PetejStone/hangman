
import React, { useState, useEffect , Component} from 'react';
import './Home.css';
import Keyboard from './Keyboard.js'
import Stickman from './Stickman.js'
var randomWords = require('random-words');

let word = randomWords()


const Home = () =>  {
    // const [word, setWord] = useState("");
    const [blank,setBlank] = useState([]);
    const[originalWord,setOriginalWord] = useState([]);
    const [lives, setLives] = useState(7);
    const [guess, setGuess]= useState('');
    const [lettersGuessed, setLettersGuessed] = useState([]);
    const [correct, setCorrect] = useState(0)
  
    const letterPressed = (e) => {
       // Set input to the letter pressed
       let letter = e.toLowerCase();
      
       setGuess(letter);

         //add guessed letter to guessedLetters Array
         for (let i=0; i < lettersGuessed.length; i++) {
           if (e.toLowerCase() === lettersGuessed[i]) {
               alert( `You've already guessed that letter, pick another one!` );
               setGuess('')
               return
           }
         }
         let updateGuessed = [...lettersGuessed];
         if (!word.includes(e.toLowerCase())) updateGuessed.push(e.toLowerCase());
         setLettersGuessed(updateGuessed)
         
         


       //if letter doesn't exist in word
       let exists = correct
       for (let i = 0; i < originalWord.length; i++) {
            
          
           if (!word.includes(e.toLowerCase())) {
              //decrease guesses by one
               
           //     let wrong = lives - 1;
               
             
           //     //If lives are less than or equal to one, alert they lost
           //     if (lives <= 1) {
           //         console.log('YOU LOST')
           //         return alert(`You Lost, the word was "${word}" `)
           //     }
           //    setLives(wrong)
           }

           //if letter exists, show on front end
           if (originalWord[i] === e.toLowerCase())  {
               blank[i] = e.toLowerCase();
           
               let update = [...blank];
               setBlank(update);
               exists = exists += 1
               
              
               setGuess('')
              
               if (correct === word.length -1) {
                   setTimeout(() => {
                       alert('Congratulations! You Won!')

                   },200)
                  
               }
           } 

           
       }
       setCorrect(exists)
       console.log(exists, word.length)
       //reset guess to blank
       setGuess('')

       if (word.includes(e.toLowerCase())) {
           console.log('true');
       } else {
           console.log('zoom in body part', lives);
           let wrapperParent = document.querySelector('.wrapperParent')
           wrapperParent.classList.add('active')

           if (lives === 7) {
               let rope = document.querySelector('.ropeParent')
               rope.classList.add('zoom')
           } else if (lives === 6) {
               let head = document.querySelector('.headParent')
               head.classList.add('zoom')
           } else if (lives === 5) {
               let torso = document.querySelector('.torsoParent')
               torso.classList.add('zoom')
           } else if (lives === 4) {
               let rightarm = document.querySelector('.rightarmParent')
               rightarm.classList.add('zoom')
           } else if (lives === 3) {
               let leftarm = document.querySelector('.leftarmParent')
               leftarm.classList.add('zoom')
           } else if (lives === 2) {
               let rightleg = document.querySelector('.rightlegParent')
               rightleg.classList.add('zoom')
           } else if (lives === 1) {
               let leftleg = document.querySelector('.leftlegParent')
               leftleg.classList.add('zoom')
           }

           let wrong = lives - 1;
               
             
           //If lives are less than or equal to one, alert they lost
           if (lives <= 1) {
               console.log('YOU LOST')
               setTimeout(() => {
                   alert(`You Lost, the word was "${word}" `)
               },2000)
               
           }
          setLives(wrong)
           

           // setTimeout(()=> {
           //     // console.log('timeout',head)
           //    let head = document.querySelector('.headParent')
           //     head.classList.remove('zoom')
           // },1000)
       }
    }


    const handleKeyPress = e => {
       
           
        

        // Set input to the letter pressed
        let letter = e.target.value.toLowerCase();
        console.log('letter',e.target.value)
        setGuess(letter);

          //add guessed letter to guessedLetters Array
          for (let i=0; i < lettersGuessed.length; i++) {
            if (e.target.value.toLowerCase() === lettersGuessed[i]) {
                alert( `You've already guessed that letter, pick another one!` );
                setGuess('')
                return
            }
          }
          let updateGuessed = [...lettersGuessed];
          if (!word.includes(e.target.value.toLowerCase())) updateGuessed.push(e.target.value.toLowerCase());
          setLettersGuessed(updateGuessed)
          
          


        //if letter doesn't exist in word
        let exists = correct
        for (let i = 0; i < originalWord.length; i++) {
             
           
            if (!word.includes(e.target.value.toLowerCase())) {
               //decrease guesses by one
                
            //     let wrong = lives - 1;
                
              
            //     //If lives are less than or equal to one, alert they lost
            //     if (lives <= 1) {
            //         console.log('YOU LOST')
            //         return alert(`You Lost, the word was "${word}" `)
            //     }
            //    setLives(wrong)
            }

            //if letter exists, show on front end
            if (originalWord[i] === e.target.value.toLowerCase())  {
                blank[i] = e.target.value.toLowerCase();
            
                let update = [...blank];
                setBlank(update);
                exists = exists += 1
                
               
                setGuess('')
               
                if (correct === word.length -1) {
                    setTimeout(() => {
                        alert('Congratulations! You Won!')

                    },200)
                   
                }
            } 

            
        }
        setCorrect(exists)
        console.log(exists, word.length)
        //reset guess to blank
        setGuess('')

        if (word.includes(e.target.value.toLowerCase())) {
            console.log('true');
        } else {
            console.log('zoom in body part', lives);
            let wrapperParent = document.querySelector('.wrapperParent')
            wrapperParent.classList.add('active')

            if (lives === 7) {
                let rope = document.querySelector('.ropeParent')
                rope.classList.add('zoom')
            } else if (lives === 6) {
                let head = document.querySelector('.headParent')
                head.classList.add('zoom')
            } else if (lives === 5) {
                let torso = document.querySelector('.torsoParent')
                torso.classList.add('zoom')
            } else if (lives === 4) {
                let rightarm = document.querySelector('.rightarmParent')
                rightarm.classList.add('zoom')
            } else if (lives === 3) {
                let leftarm = document.querySelector('.leftarmParent')
                leftarm.classList.add('zoom')
            } else if (lives === 2) {
                let rightleg = document.querySelector('.rightlegParent')
                rightleg.classList.add('zoom')
            } else if (lives === 1) {
                let leftleg = document.querySelector('.leftlegParent')
                leftleg.classList.add('zoom')
            }

            let wrong = lives - 1;
                
              
            //If lives are less than or equal to one, alert they lost
            if (lives <= 1) {
                console.log('YOU LOST')
                setTimeout(() => {
                    alert(`You Lost, the word was "${word}" `)
                },2000)
                
            }
           setLives(wrong)
            

            // setTimeout(()=> {
            //     // console.log('timeout',head)
            //    let head = document.querySelector('.headParent')
            //     head.classList.remove('zoom')
            // },1000)
        }
        
   }
 

    const newWord = e => {
        
        word = randomWords();
        

        if (word.length < 5) {
            newWord()
        } else {
            return word
        }
    }

      
        if (word.length < 5) newWord();
              let newBlank = word.split('')
              let oldWord = word.split('')
             
        for (let i = 0; i < newBlank.length; i++) {
            newBlank[i] = '_ '
            // setBlank([newBlank])
        };



        useEffect(() => {
            setBlank(newBlank);
            setOriginalWord(oldWord);
            setLives(lives);
            setGuess(guess);
            setLettersGuessed(lettersGuessed);
            setCorrect(correct)
            
          },[]);
       console.log(word)
    
        return  (
           
            <div>
                
               <p>{blank}</p>
        

                <div className="keyboard">
                <div className="rowone">
              
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
          
            </div>
                <p>Guesses Left: {lives}</p>
                <p>Letters Guessed</p>
                
                <ul className="list"> {lettersGuessed.map(function(letter){
                    return (<li>{letter}, </li>)
                  })}</ul>
            
                  <Stickman />


    

            </div>
            
        )
      }
    


export default Home