import React, {useState} from 'react';
import './../App.css'
import {Form, Button} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const RickAndMorty = ({data, loading}) => {
  const [inputText, setInputText] = useState('');
  const [selectedPersons, setSelectedPersons] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  
  const [maleCheckbox, setMaleCheckbox] = useState(false);
  const [femaleCheckbox, setFemaleCheckbox] = useState(false);
  const [aliveCheckbox, setAliveCheckbox] = useState(false);
  const [deadCheckbox, setDeadCheckbox] = useState(false);
  const [unknownCheckbox, setUnknownCheckbox] = useState(false);

  const searchHandler = () => {
    setSelectedPersons(data.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase())));
  }

  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage; 
  const currentPosts = selectedPersons.slice(indexOfFirstPost, indexOfLastPost) 

  const checkboxHandler = (type) => {
    if (type === "male"){
      setMaleCheckbox(!maleCheckbox);
      setFemaleCheckbox(false);
      setAliveCheckbox(false);
      setDeadCheckbox(false);
      setUnknownCheckbox(false);
      if (!maleCheckbox){
        setSelectedPersons(data.filter(item => item.gender === 'Male'))
      }else{
        setSelectedPersons(data)
      }
    }else if (type === "female"){
      setFemaleCheckbox(!femaleCheckbox);
      setMaleCheckbox(false);
      setAliveCheckbox(false);
      setDeadCheckbox(false);
      setUnknownCheckbox(false);
      if (!femaleCheckbox){
        setSelectedPersons(data.filter(item => item.gender === 'Female'))
      }else{
        setSelectedPersons(data)
      }
    }else if (type === "alive"){
      setAliveCheckbox(!aliveCheckbox);
      setDeadCheckbox(false);
      setUnknownCheckbox(false);
      setMaleCheckbox(false);
      setFemaleCheckbox(false); 

      if (!aliveCheckbox){
        setSelectedPersons(data.filter(item => item.status === 'Alive'));
      }else{
        setSelectedPersons(data)
      }
    }else if (type === "dead"){
      setDeadCheckbox(!deadCheckbox);
      setUnknownCheckbox(false);
      setMaleCheckbox(false);
      setFemaleCheckbox(false); 
      setAliveCheckbox(false);

      if (!deadCheckbox){
        setSelectedPersons(data.filter(item => item.status === 'Dead'));
      }else{
        setSelectedPersons(data)
      }

    }else if (type === "unknown"){
      setUnknownCheckbox(!unknownCheckbox);
      setDeadCheckbox(false);
      setMaleCheckbox(false);
      setFemaleCheckbox(false); 
      setAliveCheckbox(false);


      if (!unknownCheckbox){
        setSelectedPersons(data.filter(item => item.status === 'unknown'));
      }else{
        setSelectedPersons(data)
      }
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