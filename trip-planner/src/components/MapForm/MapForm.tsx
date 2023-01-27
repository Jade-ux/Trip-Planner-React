import React, { useState, ChangeEvent } from "react";
// import { DateRangePicker } from 'react-date-range';

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
    const minDate = new Date().toLocaleDateString('en-ca');

    const countryChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement
        setEnteredCountry(target.value);
    };

    const cityChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement
        setEnteredCity(target.value);
    };

    const fromDateChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement
        setEnteredFromDate(target.value);
    };

    const toDateChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement
        setEnteredToDate(target.value);
    };

    // const selectionRange = {
    //     startDate: new Date(),
    //     endDate: new Date(),
    //     key: 'selection',
    // }

    const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
  
        const mapData = {
            country: enteredCountry,
            city: enteredCity,
            fromDate: new Date(enteredFromDate),
            toDate: new Date(enteredToDate),
        };

        console.log(mapData);
        setEnteredCountry("");
        setEnteredCity("");
        setEnteredFromDate("");
        setEnteredToDate("");
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
            {/* <DateRangePicker 
                ranges={[selectionRange]}
            /> */}
            <input
                type="date"
                min={minDate}
                max="2050-01-12"
                value={enteredFromDate}
                onChange={fromDateChangeHandler}
            />
            <input
                type="date"
                min={minDate}
                max="2050-01-12"
                value={enteredToDate}
                onChange={toDateChangeHandler}
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