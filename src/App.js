import "./App.css";
import Login from "./pages/Login";
import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Playlists from "./pages/Playlists";
import SimplePlayer from "./pages/SimplePlayer";
import Categories from "./pages/Categories";
import Albums from "./pages/Albums";
import TokenContext from "./TokenContext";
import { useState } from "react";
import Callback from "./pages/Callback";


function App() {
	var tokenState = useState(null);

	return (
		<TokenContext.Provider value={tokenState}>
			<Router>
				{(function () {
					if (tokenState[0]?.access_token)
						return (
							<>
								<Featured path="/featured" />
								<Playlists path="/playlists" />
								<Playlists path="/playlists/:id" />
								<SimplePlayer path="/simpleplayer" />
								<SimplePlayer path="/simpleplayer/:id" />
								<Categories path="/categories" />
								<Albums path="/albums" />
							</>
						);
				})()}
				<Login default />
				<Callback path="/callback" />
			</Router>
		</TokenContext.Provider>
	);
}

export default App;
