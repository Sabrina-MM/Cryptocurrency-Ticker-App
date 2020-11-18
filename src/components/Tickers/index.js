import React, { useState } from "react";
import Cryptocurrency from "./Cryptocurrency";
import axios from "axios";

import "./tickers.css";

export default function Tickers() {
  const [data, setData] = useState([]);

  //optional -> setInterval(() => fetchCryptocurrencyData(), 60 * 1000);

  const fetchCryptocurrencyData = () => {
    const url = "https://api.coinmarketcap.com/data-api/v3/topsearch/rank";
    axios
      .get(url)
      .then((response) => setData(response.data.data.cryptoTopSearchRanks));
  };

  if (data.length === 0) {
    fetchCryptocurrencyData();
  }
  return (
    <div style={{ display: "inline-flex", flexWrap: "wrap", width: "75%" }}>
      {data.slice(0, 6).map((item, index) => {
        return (
          <div className={"tickers card" + [index]}>
            <div key={index}>
              <Cryptocurrency data={item} />
            </div>
          </div>
        );
      })}
      <div className="foot">
        <label className="updated">Information updated </label>
        <input
          className="button"
          type="button"
          value="click"
          onClick={() => fetchCryptocurrencyData()}
        />
      </div>
    </div>
  );
}
//mirar button
