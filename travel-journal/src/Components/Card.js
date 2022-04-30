import data from './data';

function Card(props) {
    // const element = data.map(item => 
    //     ())
    console.log(props)
    return (
      <div className="card-container">
        <img src={props.item.imageUrl}/>
        <span>{props.item.location}</span>
        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        <h3>{props.item.title}</h3>
        <span>{props.item.startDate} - {props.item.endDate}</span>
        <p>{props.item.description}</p>
      </div>
    );
  }
  
  export default Card;