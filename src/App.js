import React, {useState, useEffect} from 'react'; 
import './App.css';
import Films from './components/Films'

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate').then(response => {
      if (response.ok){
        return response.json();
      }
      throw response;
    }).then(data => {
      setData(data);
    }).finally(() => {
      setIsLoading(true)
    })
  }, [])
  
  return (
    <div className="App">
      {
        isLoading ? <Films data={data.results} /> : ""
      }
    </div>  
  );
}

export default App;
