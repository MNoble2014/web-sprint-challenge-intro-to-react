import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Character } from './components/Character';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films')
    .then(res => {
      setData(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  console.log(data) 
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className='container'>
        <div>
          {data.map(item => {
            return <Character key={item.id} data={item} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
