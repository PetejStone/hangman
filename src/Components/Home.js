
import React, { useState, useEffect , Component} from 'react';
import './Home.css';
var randomWords = require('random-words');

let word = randomWords()


const Home = () =>  {
    // const [word, setWord] = useState("");
    const [blank,setBlank] = useState([]);
    const[originalWord,setOriginalWord] = useState([]);
    const [lives, setLives] = useState(10);
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
          for (let i=0; i < lettersGuessed.length; i++) {
            if (e.target.value === lettersGuessed[i]) {
                alert( `You've already guessed that letter, pick another one!` );
                setGuess('')
                return
            }
          }
          let updateGuessed = [...lettersGuessed];
          if (!word.includes(e.target.value)) updateGuessed.push(e.target.value);
          setLettersGuessed(updateGuessed)
          
          


        //if letter doesn't exist in word
        for (let i = 0; i < originalWord.length; i++) {
             
           

            if (!word.includes(e.target.value)) {
               //decrease guesses by one
                console.log('wrong');
                let wrong = lives - 1;
                
              
                //If lives are less than or equal to one, alert they lost
                if (lives <= 1) {
                    console.log('YOU LOST')
                    return alert(`You Lost, the word was "${word}" `)
                }
               setLives(wrong)
            }

            //if letter exists, show on front end
            if (originalWord[i] === e.target.value)  {
                blank[i] = e.target.value;
            
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
                <p>Letters Guessed</p>
                
                <ul> {lettersGuessed.map(function(letter){
                    return (<li>{letter}, </li>)
                  })}</ul>
                  <body>

<div class="wrapper">
    <div class="head"></div>
    <div class="torso"></div>
    <div class="leftarm"></div>
    <div class="rightarm"></div>
    <div class="leftleg"></div>
   
    <div class="rightleg"></div>

    <div class="barone"></div>
    <div class="bartwo"></div>
    <div class="barthree"></div>
    <div class="rope"></div>
</div>


    
</body>
            </div>
            
        )
      }
    


export default Home