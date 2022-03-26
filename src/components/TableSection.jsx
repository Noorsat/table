import React from 'react';
import './../App.css'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableSection = ({data}) => {
    console.log(data);
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>
                    <span className="song__title">ПЕСНЯ</span>
                </th>  
                <th>АРТИСТ</th>
                <th>ПРОСЛУШИВАНИЕ</th>  
            </tr>
        </thead>
        <tbody>
            {
                data.map(item => {
                    return (
                        <tr>
                            <td>
                                <div className='name'>
                                    <div className="name__img">
                                        <img src={item.image[0]["#text"]}/>
                                    </div>
                                    <div className="name__title">
                                        {item.name}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="artist__name">
                                    {item.artist.name}
                                </div>
                            </td>
                            <td>
                                <div className="count">
                                    <div className="count__title">
                                        {item.playcount}
                                    </div>
                                    <div className="count__button">
                                        <a href={item.url}>Shazam</a>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    )
                })
            }
        </tbody>
    </Table>
  )
}

export default TableSection;