import TripItem from '../TripItem/TripItem';
import Card from '../UI/Card';
import './Trips.css';

const Trips = (props: any) => {
  return (
    <Card className="trips">
      <TripItem
        country={props.items[0].country}
        city={props.items[0].city}
        date={props.items[0].date}
      />
    </Card>
  );
}

export default Trips;
