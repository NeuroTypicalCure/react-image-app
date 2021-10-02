import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardBoard from './components/CardBoard';
import Canvas3D from './components/Canvas3D';

function App() {
  // use state hooks
  const [query, setQuery] = useState('boat');
  const [value, setValue] = useState('boat');
  const [cards, setCards] = useState([]);
  
  // use effect hook: when [dependencies] change -> (re-render)
  useEffect(() => {
    console.log("rerender");
    function getPieces() {
        axios.get(`http://localhost:5000/getMetMuseumSearch/${query}`).then(items=>{
          console.log("items data: "+items.data);
          setCards(items.data);
        });
    }getPieces();
    return function cleanup() {
      setCards([]);
    }
  }, [query]);

  // event listeners
  const onClick = () => setQuery(value);

  // app render
  // <CardBoard className="container" cards={cards} />
  return (
    <div className="App">
      <header className="App-header">
        <input value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={onClick}>Search</button>
        <Canvas3D items={cards}/>
      </header>
    </div>
  );
}

export default App;
