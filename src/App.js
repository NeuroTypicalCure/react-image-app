import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Card} from 'bootstrap';
import axios from 'axios';
import GridGenerator from './components/GridGenerator';

function App() {
  // use state hooks
  const [query, setQuery] = useState('sunflower');
  const [value, setValue] = useState('sunflower');
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

  // card component
  const Card = (props) => {
    return (
        <div className="card" style={{ width: '18rem', margin:'1rem'}}>
          <img className="card-img-top" style={{height:'24rem'}} src={props.src} />
          <div className="card-body">
            <h5 className="card-title" style={{color:'black',height:'5rem'}}>{props.title}</h5>
          </div>
        </div>
    )
  }

  // card-board component
  const Board = () => {
    return(
      <GridGenerator cols={4}>
        {cards&&
          cards.map((item) => {
              return <Card key={item.title} src={item.src} title={item.title}></Card>
          })
        }
      </GridGenerator>
    )
  }

  // app render
  return (
    <div className="App">
      <header className="App-header">
        <input value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={onClick}>Search</button>
        <Board className="container"></Board>
      </header>
    </div>
  );
}

export default App;
