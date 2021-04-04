import React from "react";
import { Card } from "react-bootstrap";
import "../Cryptocurrency";

export default function Cryptocurrency(props) {
  return (
    <div className="text-center p-2">
      <Card.Title className="mb-3">
        {props.data.name}({props.data.symbol})
      </Card.Title>
      <Card.Text>
        <strong>$ {(+props.data.priceChange.price).toFixed(2)}</strong>
        <div className="row">
          <div className="col-4">
            {(+props.data.priceChange.priceChange30d).toFixed(2)}% 30d{" "}
            <i class="fas fa-hourglass-start"></i>
          </div>
          <div className="col-4">
            {(+props.data.priceChange.priceChange24h).toFixed(2)}% 24hr{" "}
            <i class="far fa-clock"></i>
          </div>
          <div className="col-4">
            {(+props.data.priceChange.priceChange7d).toFixed(2)}% 7days{" "}
            <i class="fas fa-calendar-day"></i>
          </div>
        </div>
      </Card.Text>
    </div>
  );
}
