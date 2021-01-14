import './App.css';
import React, {useState} from 'react';
import {Router} from '@reach/router';
import Search from './components/Search';
import DisplaySearch from './components/DisplaySearch';


function App() {
  const [result, setResult] = useState(null)

  return (
    <div className="App">
      <header>
        <img class="star-wars-img" src="/Star_Wars_logo.png"/>
      </header>
      <Search result={result} setResult={setResult}/>
      <Router>
        <DisplaySearch path="/:category/:id" result={result}/>
      </Router>
    </div>
  );
}

export default App;
