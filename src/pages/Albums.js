import Album from "../components/Album";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import "./Albums.css";

export default function Albums() {
	return (
		<article className="albums_article">
			<TopNav h1="All Albums" pageName="Music" />

			<section className="all_albums_section">
				<div className="featured_albums">
					<div className="info_featured_albums">
						<p>Featured Albums</p>
						<p className="viewAll">View All</p>
					</div>
					<div className="albums">
						<img src="https://via.placeholder.com/130" alt="placeholder" />
						<img src="https://via.placeholder.com/130" alt="placeholder" />
						<img src="https://via.placeholder.com/130" alt="placeholder" />
					</div>
				</div>
			</section>
			<div className="new_releases">
				<p className="new_release">New Releases</p>
				<p className="viewAll">View All</p>
			</div>
			<div className="albumsList">
				<Album
					songCount="12"
					img_cover="https://via.placeholder.com/50"
					album_name="Old Town Road"
					artist="Billy Ray Cyrus"
				/>
				<Album
					songCount="8"
					img_cover="https://via.placeholder.com/50"
					album_name="Victory Lab"
					artist="Nipsey Hussle"
				/>
				<Album
					songCount="12"
					img_cover="https://via.placeholder.com/50"
					album_name="Thank U, Next"
					artist="Ariana Grande"
				/>
				<Album
					songCount="11"
					img_cover="https://via.placeholder.com/50"
					album_name="Death Race For Love"
					artist="Juice WRLD"
				/>
			</div>

			<BottomNav />
		</article>
	);
}
