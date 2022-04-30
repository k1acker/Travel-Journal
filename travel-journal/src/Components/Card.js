import location from '../images/location-image.png';

function Card(props) {
    return (
      <div className="card-container">
        <img className='card--image' src={props.item.imageUrl} alt='place'/>
        <div className='info--container'>
          <div className='location'>
            <img src={location} alt=''/>
            <span>{props.item.location}</span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h3>{props.item.title}</h3>
          <span>{props.item.startDate} - {props.item.endDate}</span>
          <p>{props.item.description}</p>
        </div>
      </div>
    );
  }
  
  export default Card;