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
    <div className="container">
      {data.slice(0, 6).map((item, index) => {
        return (
          <div className={"tickers card" + [index]}>
            <div key={index}>
              <Cryptocurrency data={item} />
            </div>
          </div>
        );
      })}
      <footer className="text-center p-2">
        <p className="mt-5">
          Information updated every minute
          <input
            className="button ml-2"
            type="button"
            value="click"
            onClick={() => fetchCryptocurrencyData()}
          />
        </p>
        <small className="mt-5 mb-5">
          @2020 This website was coded by <i>Sabrina Martinez</i>, and is{" "}
          <a
            href="https://hungry-williams-e0cd9f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </small>
      </footer>
    </div>
  );
}
//mirar button
