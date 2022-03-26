import React, {useState} from 'react'; 
import './App.css';
import TableSection from './components/TableSection'

import { data } from './data';

const App = () => {
  const tableData = data.toptracks.track;

  console.log(data)

  return (
    <div className="App">
      <TableSection data={tableData} />
    </div>
  );
}

export default App;
