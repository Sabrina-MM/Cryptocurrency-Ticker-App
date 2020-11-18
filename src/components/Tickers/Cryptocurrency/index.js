import React from "react";
import { Card } from "react-bootstrap";
import "./cryptocurrency.css";

export default function Cryptocurrency(props) {
  return (
    <Card.Body>
      <Card.Title>
        {props.data.name}({props.data.symbol})
      </Card.Title>
      <Card.Text>
        <strong>$ {(+props.data.priceChange.price).toFixed(2)}</strong>
        <br />
        {(+props.data.priceChange.priceChange30d).toFixed(2)}% 30d
        <br />
        {(+props.data.priceChange.priceChange24h).toFixed(2)}% 24hr
        <br />
        {(+props.data.priceChange.priceChange7d).toFixed(2)}% 7days
        <br />
      </Card.Text>
    </Card.Body>
  );
}
