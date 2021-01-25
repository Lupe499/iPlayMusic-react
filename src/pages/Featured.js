import { Link } from '@reach/router';
import BottomNav from '../components/BottomNav';
import Card from '../components/FeatureCard';
import TopNav from '../components/TopNav';
import "./Featured.css";

function Featured() {
  return (
    <div className="FeaturedPage">
        <TopNav pageName="Featured" pageH1="Featured"/>
        <Card text="The Greatest Showman" image="https://via.placeholder.com/325x425"/>
        <BottomNav />
    </div>
  );
}

export default Featured;
