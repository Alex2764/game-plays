import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Header from "./components/Header.js";
import WelcomWorldPage from "./components/WelcomeWorld.js";
import CreateGamePage from "./components/CreatePage.js";
import GameCatalogPage from "./components/GameCatalog/GameCatalogPage.js";
import GameDetail from "./components/GameDetail.js";
import LogInPage from "./components/LogIn.js";
import RegisterPage from "./components/Register.js";
import ErrorPage from "./components/ErrorPage.js";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomWorldPage} />
          <Route path="/games" component={GameCatalogPage} />
          <Route path="/create-game" component={CreateGamePage} />
          <Route path="/login" component={LogInPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
