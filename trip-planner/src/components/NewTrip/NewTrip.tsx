import React from 'react';

import MapForm from '../MapForm/MapForm';
import './NewTrip.css';

interface TripData {
    country: string;
    city: string;
    date: string;
}

export interface Props {
    onAddTrip: Function
  }

const NewTrip: React.FC<Props> = (props: Props) => {
    const onSaveTripData = (enteredTripData: TripData) => {
        const tripData = {
            ...enteredTripData,
            id: Math.random().toString(),
        };

        props.onAddTrip(tripData)
        
    };

    return <div className="new-trip">
        <MapForm onSaveTripData={onSaveTripData} />
    </div>
};

export default NewTrip;
