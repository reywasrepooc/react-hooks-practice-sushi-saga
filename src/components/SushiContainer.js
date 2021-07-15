import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"



function SushiContainer({ sushis, onEatSushi }) {

const [sushiFourList, setSushiFourList] = useState(0)


const sushiShowDetails = sushis.slice(sushiFourList, sushiFourList + 4).map((sushi) =>
  <Sushi 
  sushi={sushi}
  key={sushi.id}
  onEatSushi={onEatSushi}
  /> 
)

function handleClickMoreSushi() {
  setSushiFourList((sushiFourList) => (sushiFourList + 4) % sushis.length)
}

  return (
    <div className="belt">
      {sushiShowDetails}
      <MoreButton onClickMore={handleClickMoreSushi}
      />
    </div>
  );
}

export default SushiContainer;
