import './TripDates.css';

const TripDates = (props: any) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="trip-date">
      <div className="trip-date__month">{month}</div>
      <div className="trip-date__year">{year}</div>
      <div className="trip-date__day">{day}</div>
    </div>
  );
}
export default TripDates;
