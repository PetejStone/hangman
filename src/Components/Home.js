
import React, { useState, useEffect , Component} from 'react';
var randomWords = require('random-words');

let word = randomWords()


const Home = () =>  {
    // const [word, setWord] = useState("");
    const [blank,setBlank] = useState([]);
    // useEffect(()=> {
    //     setBlank([])
       
    // },setBlank);
    

   const handleKeyPress = e => {
        console.log('hello');
             console.log('Click happened', e.key);
           
        if (word.includes(e.key)) {
            console.log('true');
        } else {
            console.log('false');
        }
   }
 

    const newWord = e => {
        
        word = randomWords();
        console.log('word is now',word)

        if (word.length < 5) {
            this.newWord()
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

              console.log('blank is',blank)
        for (let i = 0; i < newBlank.length; i++) {
            newBlank[i] = '_ '
            // setBlank([newBlank])
        };
        useEffect(() => {
            setBlank(newBlank)
          },[]);
       console.log('blank isn now', blank)
        return  (
            <div>
                
               <p>{blank}</p>
                <input type="text" onKeyPress={(e) => handleKeyPress(e)} />
            </div>
            
        )
      }
    


export default Home