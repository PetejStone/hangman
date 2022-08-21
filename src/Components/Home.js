
import React, { useState, useEffect , Component} from 'react';
var randomWords = require('random-words');

let word = randomWords()


const Home = () =>  {
    // const [word, setWord] = useState("");
    const [blank,setBlank] = useState([]);
    const[originalWord,setOriginalWord] = useState([]);
    const [lives, setLives] = useState(5);
    const [guess, setGuess]= useState('');
    const [lettersGuessed, setLettersGuessed] = useState([]);
    const [correct, setCorrect] = useState(0)
  
    const handleKeyPress = e => {
       
           
        // if (word.includes(e.key)) {
        //     console.log('true');
        // } else {
        //     console.log('false');
        // }

        // Set input to the letter pressed
        let letter = e.target.value;
        console.log('letter',e.target.value)
        setGuess(letter);

          //add guessed letter to guessedLetters Array
        //   for (let i=0; i < lettersGuessed.length; i++) {
        //     if (e.target.value === lettersGuessed[i]) {
        //         alert( `You've already guessed that letter, pick another one!` );
        //         setGuess('')
        //         return
        //     }
        //   }
        //   let updateGuessed = [...lettersGuessed];
        //   updateGuessed.push(e.target.value);
        //   setLettersGuessed(updateGuessed)
          
          


        //if letter doesn't exist in word
        for (let i = 0; i < originalWord.length; i++) {
             
           

            if (!word.includes(e.target.value)) {
               //decrease guesses by one
                console.log('wrong');
                let wrong = lives - 1;
                
              
                //If lives are less than or equal to one, alert they lost
                if (lives <= 1) {
                    console.log('YOU LOST')
                    return alert('you lost')
                }
               setLives(wrong)
            }

            //if letter exists, show on front end
            if (originalWord[i] === e.target.value)  {
                blank[i] = e.target.value;
                console.log(blank);
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
            </div>
            
        )
      }
    


export default Home