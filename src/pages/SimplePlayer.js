import TopNav from "../components/TopNav";
import "./SimplePlayer.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from '../TokenContext';
import msToMinutesAndSeconds from "../components/MsToMinAndSec";

function SimplePlayer(props) {
    var [token] = useContext(TokenContext);
    var [track, settrack] = useState({});

    useEffect(function() {
		axios.get(`https://api.spotify.com/v1/tracks/${props.id}`, {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
		.then(response => settrack(response.data));
	}, [token, settrack]);
    console.log(track);

  return (
    <div className="SimplePlayerWrapper">
        <TopNav pageName="Playing"/>
        <div className="playerGrid">
            <img src="../public/images/sound-wave.png" alt=""/>
            <img src={track.album && track.album.images[1].url} alt=""/>  
        </div>
        <section className="mainPlayer">
            <h2>{track.name}</h2>
            <p>{track.artists && track.artists[0].name}</p>
            <div>
                <input className="timeRange" type="range"/>
                <div className="timeDiv">
                    <p>0:00</p>
                    <p>{msToMinutesAndSeconds(track.duration_ms)}</p>
                </div>
            </div>
        </section>
        <nav className="playerNav">
            <ul className="playerUl">
                <li><i className="fas fa-step-backward"></i></li>
                <li><i className="fas fa-backward"></i></li>
                <li><i className="fas fa-play play"></i></li>
                <li><i className="fas fa-forward"></i></li>
                <li><i className="fas fa-step-forward"></i></li>
            </ul>
        </nav>
    </div>
  );
}

export default SimplePlayer;
