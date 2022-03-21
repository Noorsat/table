import logo from './logo.svg';
import React, {useState} from 'react'; 
import './App.css';
import Table from './components/Table';
import { tableProducts } from './data';
import Filter from './components/Filter';

const App = () => {
  const [data, setData] = useState(tableProducts);
  const [countSort, setCountSort] = useState(true);
  const [priceSort, setPriceSort] = useState(true);
  const [paymentInput, setPaymentInput] = useState(false);
  const [countInput, setCountInput] = useState(false); 

  const countHandler = () => {
    const newData = [...data].sort((a,b) => {
      if (countSort){
        return a.count - b.count;  
      }else{
        return b.count - a.count;
      }
    })

    setCountSort(!countSort);  
    setData(newData);
  }  

  const priceHandler = () => {
    const newData = [...data].sort((a,b) => {
      if (priceSort){
        return a.priceInt - b.priceInt;  
      }else{
        return b.priceInt - a.priceInt;
      }
    })

    setPriceSort(!priceSort);  
    setData(newData);
  }

  const paymentInputHandler = () => {
    setPaymentInput(!paymentInput);
    if (!paymentInput && countInput === true){
      setData(tableProducts.filter(item => item.instalment === true))
    } else if (!paymentInput === false && countInput === true){
      setData(tableProducts.filter(item => item.count > 0))
    }else if (!paymentInput){
      setData(tableProducts.filter(item => item.instalment === true))
    }else{
      setData(tableProducts)
    }
  }

  const countInputHandler = () => {
    setCountInput(!countInput);
    if (paymentInput === true && !countInput){
      setData(tableProducts.filter(item => item.instalment === true))
    } else if (paymentInput === true && !countInput === false){
      setData(tableProducts.filter(item => item.count > 0))
    }else if (!countInput){
      setData(tableProducts.filter(item => item.count > 0))
    }else{
      setData(tableProducts)
    }
  }

  return (
    <div className="App">
      <Table data={data} countHandler={countHandler} priceHandler={priceHandler} />
      <Filter paymentInput={paymentInput} countInput={countInput} paymentInputHandler={paymentInputHandler} countInputHandler={countInputHandler} />
    </div>
  );
}

export default App;
