import React, { useState, ChangeEvent } from 'react';

import './MapForm.css';

export interface Props {
    event: object;
}

const MapForm: React.FC<Props> = (props) => {
    const [enteredCountry, setEnteredCountry] = useState('');
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredFromDate, setEnteredFromDate] = useState('');
    const [enteredToDate, setEnteredToDate] = useState('');

    const countryChangeHandler = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        setEnteredCountry(target.value);
    };

    const cityChangeHandler = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        setEnteredCity(target.value);
    };

    const datesChangeHandler = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        setEnteredFromDate(target.value);
        setEnteredToDate(target.value);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();

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
                        <input type="text" value={enteredCountry} onChange={countryChangeHandler} />
                    </div>
                    <div className="new-trip__control">
                        <label>City</label>
                        <input type="text" value={enteredCity} onChange={cityChangeHandler} />
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
};

export default MapForm;
