
import React, { useState, useEffect , Component} from 'react';
var randomWords = require('random-words');

let test = randomWords()


class Home extends Component {
  
    handleClick() {
        console.log('Click happened');
      }

    randomWord() {
        test = randomWords()
    }

    render() {
        return <p>{test}</p>
      }
    
}

export default Home