import React from 'react';
import './../App.css'

const Films = ({data}) => {
    console.log(data);
  return (
    <div className="films">
      {
        data.map(item => {
          return (
            
              <div className="card">
              <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" style={{width:412, height:600}} />
              <div className="content">
                  <div className="descr">
                      {item.vote_count} голосов
                  </div>
                  <div style={{color:"white"}} className="ratings">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </div>
                  <div className="title">
                    {item.original_title}
                  </div>
              </div>
                <div className="overlay">
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Films;