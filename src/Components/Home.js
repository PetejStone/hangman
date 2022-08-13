
import React, { useState, useEffect , Component} from 'react';
var randomWords = require('random-words');

let word = randomWords()

// let blank = word.split('')

// for (let i = 0; i < blank.length; i++) {
//     blank[i] = '_ '
// }

class Home extends Component {
  
    handleClick() {
        console.log('Click happened');
      }

    newWord() {
        console.log(word, 'was too short')
        word = randomWords();
        

        if (word.length < 5) {
            this.newWord()
        } else {
            return word
        }
    }

    render() {
        console.log('word is', word)
        if (word.length < 5) this.newWord()
        console.log('word is now', word)
        let blank = word.split('')

        for (let i = 0; i < blank.length; i++) {
            blank[i] = '_ '
        }
        return  (
            <div>
                
                <p>{blank}</p>
            </div>
            
        )
      }
    
}

export default Home