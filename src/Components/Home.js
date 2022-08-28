
import React, { useState, useEffect , Component} from 'react';
import './Home.css';
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
  

    const closePopup = () => {
        console.log('hello')
        document.querySelector('.wrapperParent').classList.remove('active')
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
                let exists = correct + 1;
                setCorrect(exists)
               
                setGuess('')
                
                if (correct === word.length -1) {
                    setTimeout(() => {
                        alert('Congratulations! You Won!')

                    },200)
                   
                }
            } 

            
        }
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

    // const splitWord = e => {
        
    //     let newBlank = word.split('')

    //     // for (let i = 0; i < newBlank.length; i++) {
    //     //     newBlank[i] = '_ '
    //     //     return setBlank([newBlank])
    //     // }

    //     // console.log(blank)
    //     console.log(newBlank)
    //     // setBlank(newBlank)
    // }
    
    
   
      
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
                <input t
                ype="text" 
                onChange={(e) => handleKeyPress(e)} 
                value = {guess}
                
                />
                <p>Guesses Left: {lives}</p>
                <p>Letters Guessed</p>
                
                <ul className="list"> {lettersGuessed.map(function(letter){
                    return (<li>{letter}, </li>)
                  })}</ul>
                  <body>
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


    
</body>
            </div>
            
        )
      }
    


export default Home