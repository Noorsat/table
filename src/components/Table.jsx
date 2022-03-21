import React from 'react';
import './../App.css'

const Table = ({data, countHandler, priceHandler}) => {
    console.log(data);
  return (
    <div className="table"> 
        <table>
            <tr>
                <th>№</th>
                <th>Продукт</th>    
                <th onClick={priceHandler}>Цена</th>
                <th onClick={countHandler}>Количество</th>
                <th>В рассрочку</th>
            </tr>
            {
                data.map(item => (
                    <tr key={item.id} style={{background: item.count < 7 ? `green` : null}}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.count}</td>
                        <td>{item.instalment ? <div>&#10004;</div> : null}</td>
                    </tr>
                ))
            }
        </table>
    </div>  
  )
}

export default Table