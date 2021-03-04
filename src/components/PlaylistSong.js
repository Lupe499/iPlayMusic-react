import { Link } from "@reach/router";
import "./PlaylistSong.css";

function PlaylistSong({ songName, artistName, time, id }) {
	//throw Error("pfffffff hahahaha")
	return (
		<Link to={"/simpleplayer/" + id} className="playlistSongWrapper">
			<i className="fas fa-play"></i>
			<div className="songText">
				<h3>{songName}</h3>
				<p>{artistName}</p>
			</div>
			<p className="time">{time}</p>
		</Link>
	);
}

export default PlaylistSong;
