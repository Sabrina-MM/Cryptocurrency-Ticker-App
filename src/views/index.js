import React from "react";
import Tickers from "../components/Tickers";

import "./views.css";

function App() {
  return (
    <div className="app">
      <nav className="text-center m-0 text-white bg-dark p-3">
        {" "}
        <h1>Cryptocurrency Ticker</h1>
      </nav>
      <Tickers />
    </div>
  );
}

export default App;
