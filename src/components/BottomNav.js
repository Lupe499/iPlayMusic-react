import { Link } from "@reach/router";
import "./BottomNav.css";

function BottomNav({current1, current2, current3, current4, current5}) {
  return (
    <nav className="BottomNav">
        <ul className="BottomUl">
            <li><Link to="/playlists"><i style={{color: current1}} class="fab fa-creative-commons-sampling"></i></Link></li>
            <li><i style={{color: current2}} className="fas fa-microphone-alt"></i></li>
            <li><ion-icon style={{color: current3}} name="radio-outline"></ion-icon></li>
            <li><i style={{color: current4}} class="fas fa-adjust"></i></li>
            <li><i style={{color:current5}} class="fas fa-cog"></i></li>
        </ul>
    </nav>
  );
}

export default BottomNav;