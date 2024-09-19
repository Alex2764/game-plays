import Header from "./components/Header.js";
import WelcomWorldPage from "./components/WelcomeWorld.js";
import CreateGamePage from "./components/CreatePage.js";
import GameCatalogPage from "./components/GameCatalogPage.js";


function App() {
  const routes = {
    './home': WelcomWorldPage,
    './games': GameCatalogPage,
    './create-game': CreateGamePage,
  };

  return (
    <div id="box">
       <Header />
       <main id="main-content">
            <WelcomWorldPage />
        </main>
    </div>
  );
}

export default App;
