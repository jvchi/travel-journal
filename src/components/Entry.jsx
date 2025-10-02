import JapanImg from "/Users/destiny/travel journal/src/assets/japan.jpeg"
import LocationMarker from "/Users/destiny/travel journal/src/assets/location.png"
export default function Entry(props){
  console.log(props)
  return(
    <section className="journal">
      <span>
        <img src={props.img.src} alt={props.img.alt} className="japan-img"/>
      </span>
      <ul className="Destination">
        <li className="country-info"><img src={LocationMarker} alt="location-marker" className="location-marker" /><span className="country-name">{props.CountryName}</span> <a href={props.GoogleMaps}>View on Google Maps</a></li>

        <li className="mount-fuji">{props.location}</li>

        <li className="date">{props.date}</li>

        <li className="about">{props.about}</li>

      </ul>
    </section>
  )
}