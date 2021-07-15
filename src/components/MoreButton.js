import React from "react";

function MoreButton({ onClickMore }) {

  return <button onClick={(event) => onClickMore(event.target.clicked)} >More sushi!</button>;
}

export default MoreButton;
