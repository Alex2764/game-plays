import { useState, createElement } from "react";

import Header from "./components/Header.js";
import WelcomWorldPage from "./components/WelcomeWorld.js";
import CreateGamePage from "./components/CreatePage.js";
import GameCatalogPage from "./components/GameCatalogPage.js";


function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <WelcomWorldPage />,
    '/games': <CreateGamePage />,
    '/create-game': <GameCatalogPage />,
  };

  const navigationChngeHandler = (path) => {
    setPage(path);
  };

  return (
    <div id="box">
      <Header
        navigationChngeHandler={navigationChngeHandler}
      />
      <main id="main-content">
      {routes[page] 
          ? routes[page]
          : <h2>No Page Found!</h2>
        }
      </main>
    </div>
  );
}

export default App;
