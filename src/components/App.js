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
  const [startIndex, setStartIndex] = useState(0)
  const sushiSlice = sushiData.slice(startIndex, startIndex + 4)
  const [plates, setPlates] = useState([])
  
  function addMoreSushi() {
    setStartIndex(startIndex + 4)
  }

  function handlePlateStack() {
    setPlates([...plates, 1])
  }

  console.log(plates)

  return (
    <div className="app">
      <SushiContainer
        sushiSlice={sushiSlice}
        addMoreSushi={addMoreSushi}
        stackAPlate={handlePlateStack}
      />
      <Table
        plates={plates}
      />
    </div>
  );
}

export default App;
