import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js'
import { Route, BrowserRouter, Switch, Routes } from 'react-router-dom'
var randomWords = require('random-words');
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>

        <header className="App-header">
        
          <h1>Hello! Welcome to Hangman!</h1>
         <Home />
        
         <Routes>
            <Route component={Home} />
         </Routes>
        
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
