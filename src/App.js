import React, {useState, useEffect} from 'react'; 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import RickAndMorty from './components/RickAndMorty'

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character').then(response => {
      if (response.ok){
        return response.json();
      }
      throw response;
    }).then(data => {
      setData(data);
    }).finally(() => {
      setLoading(true)
    })
  }, [])

  
  return (
    <div className="App">
        <Routes>
          {loading ? <Route path="/" exact element={<RickAndMorty data={data.results} loading={loading}/> } />  : "" }
          <Route path="/card/:id" element={<Card data={data.results} />} />
        </Routes>
    </div>  
  );
}

export default App;
