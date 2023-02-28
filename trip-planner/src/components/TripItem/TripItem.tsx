import React from 'react';

import TripDates from "./TripDates"
import Card from "../UI/Card";
import "./TripItem.css";

const TripItem = (props: any) => {
  return (
    <Card className="trip-item">
      <TripDates date={props.date} />
      <div className="trip-item__country">
        <h1>{props.country}</h1>
        <h2>{props.city}</h2>
      </div>
    </Card>
  );
}

export default TripItem;
