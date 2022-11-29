import React, { useState } from "react";

function Sushi({ sushi, stackAPlate, spendMoney, cash }) {

  const [monchmonch, setMonchMonch] = useState(false)

  function handleClick() {
    if (cash - sushi.price >= 0) {
    setMonchMonch(true);
    stackAPlate();
    spendMoney(sushi.price);
    }
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
