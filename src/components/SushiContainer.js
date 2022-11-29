import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiSlice, addMoreSushi, stackAPlate, spendMoney }) {

  const sushiData = sushiSlice.map((sushi) => {
    return(
      <Sushi
        key={sushi.id}
        sushi={sushi}
        stackAPlate={stackAPlate}
        spendMoney={spendMoney}
      />
    )
  })

  return (
    <div className="belt">
      {sushiData}
      <MoreButton
        addMoreSushi={addMoreSushi}
      />
    </div>
  );
}

export default SushiContainer;
