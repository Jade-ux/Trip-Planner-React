import TripItem from '../TripItem/TripItem';
import Card from '../UI/Card';
import './Trips.css';

export interface Trip {
  id: string,
  country: string,
  city: string,
  date: DateConstructor,
}

const Trips = (props: any) => {
  return (
    <Card className="trips">
      {props.items.map((trip: Trip) => (
        <TripItem
          country={trip.country}
          city={trip.city}
          date={trip.date}
        />
      ))}
    </Card>
  );
}

export default Trips;
