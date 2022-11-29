import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import MoneyForm from "./MoneyForm";

const API = "http://localhost:3001/sushis";

function App() {

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((data) => setSushiData(data))
  }, [])

  const initialBudget = 100

  const [sushiData, setSushiData] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const sushiSlice = sushiData.slice(startIndex, startIndex + 4)
  const [plates, setPlates] = useState([])
  const [cash, setCash] = useState(initialBudget)
  
  function addMoreSushi() {
    setStartIndex(startIndex + 4)
  }

  function handlePlateStack() {
    setPlates([...plates, 1])
  }

  function spendMoney(price) {
    setCash(cash - price)
  }

  function increaseCash(newCash) {
    setCash(cash + newCash)
  }

  return (
    <div className="app">
      <SushiContainer
        sushiSlice={sushiSlice}
        addMoreSushi={addMoreSushi}
        stackAPlate={handlePlateStack}
        spendMoney={spendMoney}
        cash={cash}
      />
      <Table
        plates={plates}
        cash={cash}
      />
       <MoneyForm 
        cash={cash}
        increaseCash={increaseCash}
       />
    </div>
  );
}

export default App;
