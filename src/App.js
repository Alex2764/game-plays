import { useState } from "react";

import Header from "./components/Header.js";
import WelcomWorldPage from "./components/WelcomeWorld.js";
import CreateGamePage from "./components/CreatePage.js";
import GameCatalogPage from "./components/GameCatalog/GameCatalogPage.js";
import GameDetail from "./components/GameDetail.js";
import LogInPage from "./components/LogIn.js";
import RegisterPage from "./components/Register.js";
import ErrorPage from "./components/ErrorPage.js";

function App() {
  const [page, setPage] = useState('/home');
  
  const navigationChngeHandler = (path) => {
    setPage(path);
  };

  const router = (path) => {
    let pathNames = path.split('/');

    let rootPath = pathNames[1];
    // console.log(rootPath);
    
    let argument = pathNames[2];
    //! console.log(argument); Undifined
     

    const routes = {
      'home': <WelcomWorldPage navigationChngeHandler={navigationChngeHandler} />,
      'games': <GameCatalogPage navigationChngeHandler={navigationChngeHandler} />,
      'create-game': <CreateGamePage />,
      'login': <LogInPage />,
      'register': <RegisterPage />,
      'details': <GameDetail id={argument} />,
    };

    return routes[rootPath];
  };

  return (
    <div id="box">
      <Header navigationChngeHandler={navigationChngeHandler} />
      <main id="main-content">
        { router(page) || <ErrorPage /> }
      </main>
    </div>
  );
}

export default App;
