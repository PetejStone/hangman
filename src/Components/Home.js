
import React, { useState, useEffect , Component} from 'react';
var randomWords = require('random-words');

let word = randomWords()


const Home = () =>  {
    // const [word, setWord] = useState("");
    
    // useEffect(()=> {
    //     word = randomWords();
    //     setWord([...word])
       
    // },word);
    

   const handleKeyPress = e => {
        console.log('hello');
             console.log('Click happened', e.key);
           
        if (word.includes(e.key)) {
            console.log('true');
        } else {
            console.log('false');
        }
   }
    //   handleKeyPress() =>  {

    //     console.log('Click happened', e.key);
    //     if (word.includes(e.key)) {
    //         console.log('true');
    //     } else {
    //         console.log('false');
    //     }
    //   }};

    const newWord = () => {
        
        word = randomWords();
        

        if (word.length < 5) {
            this.newWord()
        } else {
            return word
        }
    }

    
    
   
      
        if (word.length < 5) this.newWord()
    
        let blank = word.split('')

        for (let i = 0; i < blank.length; i++) {
            blank[i] = '_ '
        }

        console.log(blank)
        return  (
            <div>
                
               <p>{blank}</p>
                <input type="text" onKeyPress={(e) => handleKeyPress(e)} />
            </div>
            
        )
      }
    


export default Home