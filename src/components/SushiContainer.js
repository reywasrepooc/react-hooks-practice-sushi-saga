import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"



function SushiContainer({ sushiList }) {

const [sushiFourList, setSushiFourList] = useState(0)


const sushiShowDetails = sushiList.slice((sushiFourList, sushiFourList + 4).map((sushi) =>
  <Sushi 
  sushi={sushi}
  key={sushi.id}
  /> 
))

function handleClickMoreSushi() {
  setSushiFourList((sushiFourList) => (sushiFourList + 4) % sushiList.length)
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
