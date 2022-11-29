import React, { useState } from "react";

function Sushi({ sushi }) {

  const [monchmonch, setMonchMonch] = useState(false)

  function handleClick() {
    setMonchMonch(true);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {monchmonch ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
