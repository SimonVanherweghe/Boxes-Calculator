import React, { Component, useEffect, useState } from "react";

import BoxesTable from "./../components/BoxesTable";
import Sides from "./../components/Sides";
import Backs from "./../components/Backs";
import Controls from "./Controls";

import { calculateSides, calculateBacks } from "./../utils/utils";

const App = () => {
  const [blocks, setBlocks] = useState();
  const [depth, setDepth] = useState(350);
  const [fetched, setFetched] = useState(false);
  const [sawWidth, setSawWidth] = useState(4);
  const [groove, setGroove] = useState(9);

  useEffect(() => {
    fetch(`input.json`)
      .then((r) => r.json())
      .then((d) => setBlocks(d.blocks));
  }, []);

  if (!blocks) {
    return <p>Loading</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Boxes Calculator</h1>
      </header>
      <main>
        <div className="row">
          <Controls
            sawWidth={sawWidth}
            groove={groove}
            depth={depth}
            onChangeSawwidth={(value) => setSawWidth(value)}
            onChangeGroove={(value) => setGroove(value)}
            onChangeDepth={(value) => setDepth(value)}
          />
          <BoxesTable boxes={blocks} />
        </div>
        <Sides blocks={blocks} depth={depth} sawWidth={sawWidth} />
        <Backs blocks={blocks} groove={groove} sawWidth={sawWidth} />
      </main>
    </div>
  );
};

export default App;
