import RouteTemplate from './RouteTemplate';
import CardBoard from '../components/CardBoard';
import Canvas3D from '../components/Canvas3D';
import React, {useState, useEffect} from 'react';
import api from '../util/api';

export default function Gallery(props) {
    // use state hooks
    const [query, setQuery] = useState('demo');
    const [value, setValue] = useState('demo');
    const [cards, setCards] = useState([]);
    
    // use effect hook: when [dependencies] change -> (re-render)
    useEffect(() => {
      console.log("rerender");
      setCards(api.metMuseum(query));
      return function cleanup() {
        setCards([]);
      };
    }, [query]);
  
    // event listeners
    const onClick = () => setQuery(value);

    const switchVariants = (variant, items) => {
        switch(variant){
            case 'cardboard': return (<CardBoard items={items}/>);
            case 'canvas3d': return (<Canvas3D items={items}/>);
        }
    };
  
    return (
      <RouteTemplate>
        <header className="app-header">
          <input value={value} onChange={e => setValue(e.target.value)}/>
          <button onClick={onClick}>Search</button>
          {switchVariants(props.variant,cards)}
        </header>
      </RouteTemplate>
    );
}