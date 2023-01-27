import React from 'react';

import MapForm from '../MapForm/MapForm';
import './NewTrip.css';

interface TripData {
    country: string;
    city: string;
    fromDate: string;
    toDate: string;
}

const NewTrip = () => {
    const onSaveTripData = (enteredTripData: TripData) => {
        const tripData = {
            ...enteredTripData,
            id: Math.random().toString()
        };
        console.log(tripData)
        
    };

    return <div className="new-trip">
        <MapForm onSaveTripDataObj={onSaveTripData} />
    </div>
};

export default NewTrip;