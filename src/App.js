import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import grid from './grid.svg';
import draw from './draw.svg';
import Line from './Line';
import PaperList from './components/PaperList';
import paperData from './paper-data.json';

function App() {

  const [papers, setPapers] = useState(paperData);
  const [page, setPage] = useState(
    {
      "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
      "index": "1",
      "title": "NIKE-Hoodie-Demo.png",
      "number": "1/3",
      "className": "paper",
      "date": "12-28-2022",
      "hidden": true,
      "file":"file://C:/Users/RichardAgama/Downloads/NIKE-Hoodie-Demo.png",
      "img":"c_BLUE_HOODIE"
    
    }
  )

  useEffect(() => {
    console.log("useEffect()");
   }, [page]);
   

  const handleTableClick = (e)=>{
    // console.log(e.target.dataset.index);
    // console.log(e.target.attributes.dataset.value);
    const index = parseInt(e.target.attributes.dataset.value) - 1;
    //const newHidden = (e.target.id ==  "true") ? "false" : "true";


    setPage(papers[index]);

  }


  return (
    <div className="App">

      <PaperList papers={papers} page={page} handleTableClick={handleTableClick}></PaperList>
      
    </div>
  );
}

export default App;
