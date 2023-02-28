import {useState} from 'react';
import './App.css';
import Trips from './components/Trips/Trips';
import NewTrip from './components/NewTrip/NewTrip';

const DEMO_DATA = [
  {
    id: "e1",
    country: "France",
    city: "Chamonix",
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    country: "Scotland",
    city: "Glasgow",
    date: new Date(2023, 8, 2),
  },
];

const App = () => {
  const [trips, setTrips] = useState(DEMO_DATA)

  // trip should be an object - need to handle in input
  const addTripHandler = (trip: any) => {
    setTrips((prevTrips) => {
      return [trip, ...prevTrips,]
    });
  }

  return (
    <div>
      <NewTrip onAddTrip={addTripHandler}/>
      <Trips items={trips} />
    </div>
  );
}

export default App;
