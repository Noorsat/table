import React, {useState, useEffect} from 'react';
import './../App.css'
import {Form, Button} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './Pagination.tsx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findCharacters, fetchCharacters, maleCheckbox, femaleCheckbox, aliveCheckbox, deadCheckbox,unknownCheckbox } from '../store/action.ts';

const RickAndMorty = ({data, loading}) => {
  const characters = useSelector(state => state.characters.characters);
  const [inputText, setInputText] = useState('');
  const [selectedPersons, setSelectedPersons] = useState(characters);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  


  const dispatch = useDispatch(); 

  useEffect(() => {
    setSelectedPersons(characters)
  }, [characters])

  console.log(characters);  
  

  const searchHandler = () => {
    if (inputText === ""){
        fetch('https://rickandmortyapi.com/api/character').then(response => {
          if (response.ok){
            return response.json();
          }
          throw response;
          }).then(data => {
            dispatch(fetchCharacters(data.results))
          })
    }else{
      dispatch(findCharacters(inputText))
    }
  }


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage; 
  const currentPosts = selectedPersons.slice(indexOfFirstPost, indexOfLastPost) 

  const checkboxHandler = (type) => {
    if (type === "male"){
      fetch('https://rickandmortyapi.com/api/character').then(response => {
          if (response.ok){
            return response.json();
          }
          throw response;
          }).then(data => {
            dispatch(maleCheckbox(data.results))
          })
    }else if (type === "female"){
      fetch('https://rickandmortyapi.com/api/character').then(response => {
          if (response.ok){
            return response.json();
          }
          throw response;
          }).then(data => {
            dispatch(femaleCheckbox(data.results))
          })
    }else if (type === "alive"){
      fetch('https://rickandmortyapi.com/api/character').then(response => {
        if (response.ok){
          return response.json();
        }
        throw response;
        }).then(data => {
          dispatch(aliveCheckbox(data.results))
        })
    }else if (type === "dead"){
      fetch('https://rickandmortyapi.com/api/character').then(response => {
        if (response.ok){
          return response.json();
        }
        throw response;
        }).then(data => {
          dispatch(deadCheckbox(data.results))
        })

    }else if (type === "unknown"){
      fetch('https://rickandmortyapi.com/api/character').then(response => {
        if (response.ok){
          return response.json();
        }
        throw response;
        }).then(data => {
          dispatch(unknownCheckbox(data.results))
        })

    }
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
  return (
    <div className="films">
      <h1>Rick & Morty</h1>
      <div className="search mb-3 d-flex" style={{width:500, margin:'0 auto'}}>
        <Form.Control type="text" placeholder="Search for characters" className="me-4" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <Button variant="primary" type="submit" onClick={searchHandler}>
          Submit
        </Button>
      </div>
      <div className="filters d-flex justify-content-between mb-3">
          <div className="filter__gender">
            <p>Filter by gender</p> 
            <input type="checkbox" id="male" name="male" checked={maleCheckbox} onChange={() => checkboxHandler("male")} />
            <label htmlFor="male" className="me-3">Male</label>
            <input type="checkbox" id="Female" name="Female" checked={femaleCheckbox} onChange={() => checkboxHandler("female")}/>
            <label htmlFor="Female">Female</label>
          </div>
          <div className="filter__status">
            <p>Filter by status</p>
            <input type="checkbox" id="alive" name="alive" checked={aliveCheckbox} onChange={() => checkboxHandler("alive")}/>
            <label htmlFor="alive" className="me-3">Alive</label>
            <input type="checkbox" id="dead" name="dead" checked={deadCheckbox} onChange={() => checkboxHandler("dead")}/>
            <label htmlFor="dead" className="me-3">Dead</label>
            <input type="checkbox" id="unknown" name="unknown" checked={unknownCheckbox} onChange={() => checkboxHandler("unknown")}/>
            <label htmlFor="unknown">Unknown</label>
          </div>
        </div>
      <div className="cards">
      {
        currentPosts.map(item => {
          return (
            <Link to={`/card/${item.id}`} style={{textDecoration: 'none'}}>
              <div key={item.id} className="card">
                  <div className="card__img">
                    <p className="card__status" style={{background: item.status === "Alive" ? "green" : item.status === "Dead" ? "red" : "grey", color:"white", fontWeight:700}}>
                        {
                          item.status
                        }
                    </p>
                    <img src={item.image} />
                  </div> 
                  <div className="card__name">
                    {item.name}
                  </div>
                  <div className="card__location">
                    <p>Last Location</p>
                    {item.location.name}
                  </div>
              </div>
            </Link>
          )
        })
      }
      
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={selectedPersons.length} paginate={paginate}/>
    </div>
  )
}

export default RickAndMorty;