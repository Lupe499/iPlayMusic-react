import './App.css';
import Login from './pages/Login';
import { Router } from "@reach/router";
import Walkthrough from "./pages/Walkthrough";
import BottomNav from './components/BottomNav';
import Featured from './pages/Featured';
import Playlists from './pages/Playlists';

function App() {
  return (
    <Router>
      <Login path="/" />
      <Featured path="/featured" />
      <Playlists path="/playlists"/>
    </Router>

  );
}

export default App;
