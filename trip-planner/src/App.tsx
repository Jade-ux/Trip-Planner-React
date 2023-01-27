import React from 'react';
import './App.css';
import Trips from './components/Trips/Trips';
import NewTrip from './components/NewTrip/NewTrip';

function App() {
  const trips = [
    {
      id: "e1",
      country: "France",
      city: "Chamonix",
      date: new Date(2020, 7, 14),
    },
  ];
  return (
    <div>
      <NewTrip />
      <Trips items={trips} />
    </div>
  );
}

export default App;
