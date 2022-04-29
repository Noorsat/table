import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './../App.css'

const Card = ({data}) => {
    const {id} = useParams();
    const item = data[id-1];
  return (
      <>
      <div style={{textAlign: 'center'}} className="pt-3">
      <Link to="/" >Go to main page</Link> 
      </div>
    <div className="card__section">
    <div key={item.id} className="card">
        <div className="card__name">
            {item.name}
        </div>
        <div className="card__img">
            <img src={item.image} />
        </div> 
        <p className="card__status" style={{background: item.status === "Alive" ? "green" : item.status === "Dead" ? "red" : "grey", color:"white", fontWeight:700}}>
            {
                item.status
            }
        </p>
        <div className="card__gender">
            <b>Gender :</b> {item.gender} 
        </div>
        <div className="card__location">
            <b>Location :</b> {item.location.name}  
        </div>
        <div className="card__origin">
            <b>Origin :</b> {item.origin.name} 
        </div>
        <div className="card__species">
            <b>Species :</b> {item.species} 
        </div>
    </div>
    
    </div>
    
    </>
  )
}

export default Card