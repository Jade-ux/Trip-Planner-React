import React, { useState } from 'react';

import TripDates from "./TripDates"
import Card from "../UI/Card";
import "./TripItem.css";

const TripItem = (props: any) => {
  const [country, setCountry] = useState(props.country);

  const clickHandler = () => {
    setCountry('Updated');
  };

  return (
    <Card className="trip-item">
      <TripDates date={props.date} />
      <div className="trip-item__country">
        <h1>{country}</h1>
        <h2>{props.city}</h2>
        <button onClick={clickHandler}>Change country</button>
      </div>
    </Card>
  );
}

export default TripItem;
