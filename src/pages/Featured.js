import BottomNav from "../components/BottomNav";
import Card from "../components/FeatureCard";
import TopNav from "../components/TopNav";
import TokenContext from "../TokenContext";
import "./Featured.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function Featured() {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/featured-playlists", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setContent(response.data));
		},
		[token, setContent]
	);
	return (
		<div className="FeaturedPage">
			<TopNav pageName="Featured" pageH1="Featured" />
			{content.playlists &&
				content.playlists.items.map(function (result) {
					return <Card text={result.name} image={result.images[0].url} id={result.id} key={result.id} />;
				})}
			<BottomNav />
		</div>



	);
}
