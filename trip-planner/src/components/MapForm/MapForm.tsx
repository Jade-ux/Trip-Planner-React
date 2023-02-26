import React, { useState, ChangeEvent } from "react";

import "./MapForm.css";

export interface Props {
    onSaveTripData: Function;
  }

const MapForm: React.FC<Props> = (props: Props) => {
    const [enteredCountry, setEnteredCountry] = useState("");
    const [enteredCity, setEnteredCity] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const minDate = new Date().toLocaleDateString('en-ca');

    const countryChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement
        setEnteredCountry(target.value);
    };

    const cityChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement
        setEnteredCity(target.value);
    };

    const dateChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement
        setEnteredDate(target.value);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
  
        const mapData = {
            country: enteredCountry,
            city: enteredCity,
            date: new Date(enteredDate),
        };

        props.onSaveTripData(mapData)
        console.log(mapData);
        setEnteredCountry("");
        setEnteredCity("");
        setEnteredDate("");
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
                min={minDate}
                max="2050-01-12"
                value={enteredDate}
                onChange={dateChangeHandler}
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