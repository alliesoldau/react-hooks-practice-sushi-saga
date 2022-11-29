import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiSlice }) {

  const sushiData = sushiSlice.map((sushi) => {
    return(
      <Sushi
        key={sushi.id}
        sushi={sushi}
      />
    )
  })

  return (
    <div className="belt">
      {sushiData}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
