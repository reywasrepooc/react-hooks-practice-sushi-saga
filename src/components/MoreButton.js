import React from "react";

function MoreButton({ onCLickMore }) {

  return <button onClick={(event) => onClickMore(event.target.clicked)} >More sushi!</button>;
}

export default MoreButton;
