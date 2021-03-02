import { Link } from "@reach/router";
import "./FeatureCard.css";

function Card({image, text, id}) {
  return (
    <Link to={"playlists/" + id} className="CardWrapper">
        <img className="CardImage" src={image} alt=""/>
        <div>
            <h2>{text}</h2>
            <p>Soundtrack</p>
        </div>
    </Link>
  );
}

export default Card;