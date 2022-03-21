import React from 'react'

const Filter = ({paymentInput, countInput, paymentInputHandler, countInputHandler}) => {
  return (
    <div className="filters">
        <div className="filter">
            <input type="checkbox" name="r" id="r" checked={paymentInput} onChange={paymentInputHandler}/>
            <label for="r">Только в рассрочку</label>
        </div>
        <div className="filter">
            <input type="checkbox" name="count" id="count" checked={countInput} onChange={countInputHandler}/>
            <label for="count">Есть в наличии</label>
        </div>
    </div>
  )
}

export default Filter;