
import React, { useState, useEffect , Component} from 'react';
var randomWords = require('random-words');

let word = randomWords()

// let blank = word.split('')

// for (let i = 0; i < blank.length; i++) {
//     blank[i] = '_ '
// }

class Home extends Component {
  
     handleKeyPress(e) {
        console.log('Click happened', e.key);
        if (word.includes(e.key)) {
            console.log('true')
        } else {
            console.log('false')
        }
      }

    newWord() {
        
        word = randomWords();
        

        if (word.length < 5) {
            this.newWord()
        } else {
            return word
        }
    }

    render() {
      
        if (word.length < 5) this.newWord()
    
        let blank = word.split('')

        for (let i = 0; i < blank.length; i++) {
            blank[i] = '_ '
        }
        return  (
            <div>
                
                <p>{blank}</p>
                <input type="text" onKeyPress={(e) => this.handleKeyPress(e)} />
            </div>
            
        )
      }
    
}

export default Home