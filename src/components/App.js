import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setSushis(data))
  }, [])

  const handleEatSushis = (eatenSushi) => {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      })
      setSushis(updatedSushis)
      setWallet((wallet) => wallet - eatenSushi.price)
    } else { 
      alert("gimme more money!")
    }
  }

  const handleAddMoney = (moreMoney) => {
    setWallet((wallet) => wallet + moreMoney)
  }

  const eatenSushis = sushis.filter((sushi) => sushi.eaten)

  
  return (
    <div className="app">
      <SushiContainer 
      sushis={sushis}
      onEatSushi={handleEatSushis}
      />
      <Table 
      wallet={wallet}
      onAddMoney={handleAddMoney}
      plates={eatenSushis}/>
    </div>
  );
}

export default App;
