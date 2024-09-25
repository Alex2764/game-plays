import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

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
          <Route path="/games" exact component={GameCatalogPage} />
          <Route path="/create-game" component={CreateGamePage} />
          <Route path="/login" component={LogInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/games/:gameId" component={GameDetail} />
          <Route path="/custom">
            <h2>Custom Page</h2>
            <p>njsfnisdfjkdnf</p>
          </Route>
          <Route path="/logout" render={(props) => {
            console.log('Logget Out!!!');
            // props.history.push()
            return <Redirect to="/" />
          }} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
