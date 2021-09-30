import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardBoard from './components/CardBoard';

function App() {
  // use state hooks
  const [query, setQuery] = useState('boat');
  const [value, setValue] = useState('boat');
  const [cards, setCards] = useState([]);
  
  // use effect hook: when [dependencies] change -> (re-render)
  useEffect(() => {
    console.log("rerender");
    function getPieces() {
        axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q='+query).then(ids=>{
          for(let id of ids.data.objectIDs){
            axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+id).then(piece => {
              setCards(c => c.concat({src: piece.data.primaryImage, title: piece.data.title}));
            });
          }
        });
    }getPieces();
    return function cleanup() {
      setCards([]);
    }
  }, [query]);

  // event listeners
  const onClick = () => setQuery(value);

  // app render
  return (
    <div className="App">
      <header className="App-header">
        <input value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={onClick}>Search</button>
        <CardBoard className="container" cards={cards} />
      </header>
    </div>
  );
}

export default App;
