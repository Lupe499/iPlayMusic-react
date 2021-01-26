import './App.css';
import Login from './pages/Login';
import { Router } from "@reach/router";
import Featured from './pages/Featured';
import Playlists from './pages/Playlists';
import SimplePlayer from './pages/SimplePlayer';
import Categories from './pages/Categories';
import Albums from './pages/Albums';

function App() {
  return (
    <Router>
      <Login path="/" />
      <Featured path="/featured" />
      <Playlists path="/playlists"/>
      <SimplePlayer path="/simpleplayer" songName="Don’t Call Me Up" artistName="Mabel" time="3:40"/>
      <Categories path="/categories"/>
      <Albums path="/albums" />
    </Router>
  );
}

export default App;
