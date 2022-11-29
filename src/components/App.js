import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((data) => setSushiData(data))
  }, [])

  const [sushiData, setSushiData] = useState([])

  // Start counting the first 4 sushi, then update as we click on
  // const [startIndex, setStartIndex] = useState(0)
  // setStartIndex(startIndex + 4)
  const sushiSlice = sushiData.slice(0, 4)
  // console.log(sushiSlice)
  
  return (
    <div className="app">
      <SushiContainer
        sushiSlice={sushiSlice}
      />
      <Table />
    </div>
  );
}

export default App;
