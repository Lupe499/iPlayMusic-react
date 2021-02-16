import { Link } from "@reach/router";
import BottomNav from "../components/BottomNav";
import PlaylistSong from "../components/PlaylistSong";
import TopNav from "../components/TopNav";
import "./Playlists.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import msToMinutesAndSeconds from "../components/MsToMinAndSec";

function Playlists(props) {
	var [token] = useContext(TokenContext);
	var [playlist, setPlaylist] = useState({});
	var [playlists, setPlaylists] = useState();

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/me/playlists", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setPlaylists(response.data));
			if (props.id) {
				axios
					.get(`https://api.spotify.com/v1/playlists/${props.id}/tracks`, {
						headers: {
							Authorization: "Bearer " + token.access_token,
						},
					})
					.then(response => setPlaylist(response.data));
			}
		},
		[token, props.id, setPlaylist, setPlaylists]
	);
	console.log(playlists);

	return (
		<div className="PlaylistWrapper">
			<TopNav pageName="Playlists" pageH1="Playlists" />
			<div className="gallery">
				{playlists &&
					playlists.items.map(function (result) {
						return (
							<Link to={"/playlists/" + result.id}>
								<img src={result.images[1].url} alt="" />
							</Link>
						);
					})}
			</div>
			<h2>Top 50 Rock Ballads</h2>
			<div className="songsDiv">
				{playlist.items &&
					playlist.items.map(function (result) {
						console.log(result);
						return (
							<PlaylistSong
								time={msToMinutesAndSeconds(result.track?.duration_ms)}
								songName={result.track.name}
								artistName={result.track.artists[0].name}
								id={result.track.id}
								key={result.track.id}
							/>
						);
					})}

				{
					//<PlaylistSong time="3:58" songName="Old Town Road" artistName="Billy Ray Cyrus" />
					//<PlaylistSong time="2:46" songName="Don’t Call Me Up" artistName="Mabel" />
					//<PlaylistSong time="4:12" songName="Let Me Down Slowly" artistName="Alec Benjamin" />
					//<PlaylistSong time="3:37" songName="Here With Me" artistName="Marshmello" />
					//<PlaylistSong time="3:12" songName="Paradise" artistName="Bazzi" />
					//<PlaylistSong time="4:12" songName="Let Me Down Slowly" artistName="Alec Benjamin" />
					//<PlaylistSong time="3:37" songName="Here With Me" artistName="Marshmello" />
					//<PlaylistSong time="3:12" songName="Paradise" artistName="Bazzi" />
				}
				<div className="listenDiv">
					<Link to="#" className="listenButton">
						LISTEN ALL
					</Link>
				</div>
			</div>
			<BottomNav current4="#341931" />
		</div>
	);
}

export default Playlists;
