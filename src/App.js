import { useState, createElement } from "react";

import Header from "./components/Header.js";
import WelcomWorldPage from "./components/WelcomeWorld.js";
import CreateGamePage from "./components/CreatePage.js";
import GameCatalogPage from "./components/GameCatalog/GameCatalogPage.js";
import LogInPage from "./components/LogIn.js";
import RegisterPage from "./components/Register.js";
import ErrorPage from "./components/ErrorPage.js";


function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <WelcomWorldPage />,
    '/create-game': <GameCatalogPage />,
    '/games': <CreateGamePage />,
    '/login': <LogInPage />,
    '/register': <RegisterPage />,
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
          : <ErrorPage />
        }
      </main>
    </div>
  );
}

export default App;
