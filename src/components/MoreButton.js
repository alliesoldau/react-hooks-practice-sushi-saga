import React from "react";

function MoreButton({ addMoreSushi }) {

  function onButtonClick() {
    addMoreSushi()
  }

  return <button onClick={onButtonClick}>More sushi!</button>;
}

export default MoreButton;
