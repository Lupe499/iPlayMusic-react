import { Link } from "@reach/router";
import "./BottomNav.css";

function BottomNav({ current1, current2, current3, current4, current5 }) {
	return (
		<nav className="BottomNav">
			<ul className="BottomUl">
				<li>
					<Link to="/playlists">
						<i style={{ color: current1 }} className="fab fa-creative-commons-sampling"></i>
					</Link>
				</li>
				<li>
					<Link to="/simpleplayer">
						<i style={{ color: current2 }} className="fas fa-microphone-alt"></i>
					</Link>
				</li>
				<li>
					<ion-icon style={{ color: current3 }} name="radio-outline"></ion-icon>
				</li>
				<li>
					<Link to="/categories">
						<i style={{ color: current4 }} className="fas fa-adjust"></i>
					</Link>
				</li>
				<li>
					<Link to="/albums">
						<i style={{ color: current5 }} className="fas fa-cog"></i>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default BottomNav;
