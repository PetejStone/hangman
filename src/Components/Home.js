
import React, { useState, useEffect , Component} from 'react';
var randomWords = require('random-words');

let word = randomWords()


const Home = () =>  {
    // const [word, setWord] = useState("");
    const [blank,setBlank] = useState([]);
    const[originalWord,setOriginalWord] = useState([]);
    const [lives, setLives] = useState(5)

   const handleKeyPress = e => {
       
           
        // if (word.includes(e.key)) {
        //     console.log('true');
        // } else {
        //     console.log('false');
        // }

        for (let i = 0; i < originalWord.length; i++) {
            
            if (!word.includes(e.key)) {
                console.log('wrong');
                let wrong = lives - 1;
                if (lives <= 1) {
                    console.log('YOU LOST')
                    return alert('you lost')
                }
               setLives(wrong)
            }
            if (originalWord[i] === e.key)  {
                blank[i] = e.key;
                console.log(blank)
                let update = [...blank]
                setBlank(update)
                console.log('blank is now', blank)
            } 

            
        }
   }
 

    const newWord = e => {
        console.log('word not long enough', word)
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
            setLives(lives)
            
          },[]);
       console.log(word)
       console.log('UE - blank is now', blank)
       console.log('lives are', lives)
        return  (
           
            <div>
                
               <p>{blank}</p>
                <input type="text" onKeyPress={(e) => handleKeyPress(e)} />
            </div>
            
        )
      }
    


export default Home