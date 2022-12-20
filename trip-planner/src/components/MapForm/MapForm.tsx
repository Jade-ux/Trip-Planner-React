import React, { useState, ChangeEvent } from "react";

import "./MapForm.css";

export interface Props {
    onSaveTripDataObj: object;
  }

  
// interface TripData {
//     country: string;
//     city: string;
//     fromDate: string;
//     toDate: string;
// }


const MapForm: React.FC<Props> = props => {
    const [enteredCountry, setEnteredCountry] = useState("");
    const [enteredCity, setEnteredCity] = useState("");
    const [enteredFromDate, setEnteredFromDate] = useState("");
    const [enteredToDate, setEnteredToDate] = useState("");

    const countryChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement
        setEnteredCountry(target.value);
    };

    const cityChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement
        setEnteredCity(target.value);
    };

    const datesChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement
        setEnteredFromDate(target.value);
        setEnteredToDate(target.value);
    };

    const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
    };
    const mapData = {
        country: enteredCountry,
        city: enteredCity,
        fromDate: new Date(enteredFromDate),
        toDate: new Date(enteredToDate),
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-trip__controls">
            <div className="new-trip__control">
            <label>Country</label>
            <input
                type="text"
                value={enteredCountry}
                onChange={countryChangeHandler}
            />
            </div>
            <div className="new-trip__control">
            <label>City</label>
            <input
                type="text"
                value={enteredCity}
                onChange={cityChangeHandler}
            />
            </div>
            <div className="new-trip__control">
            <label>Dates</label>
            <input
                type="date"
                min="2022-01-10"
                max="2024-01-12"
                value={enteredFromDate}
                onChange={datesChangeHandler}
            />
            <input
                type="date"
                min="2022-01-10"
                max="2024-01-12"
                value={enteredToDate}
                onChange={datesChangeHandler}
            />
            </div>
        </div>
        <div className="new-trip__actions">
            <button type="submit">Add trip</button>
        </div>
    </form>
    );
};

export default MapForm;