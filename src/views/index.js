import React from "react";
import Tickers from "../components/Tickers";

import "./views.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Cryptocurrency Ticker</h2>
      </div>
      <Tickers />
      <br />
      <br />
    </div>
  );
}

export default App;
