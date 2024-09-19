import WelcomWorldPage from "./WelcomeWorld";
import LogInPage from "./LogIn";
import RegisterPage from "./Register";
import CreatePage from "./CreatePage";
import EditPage from "./EditPage";
import GameDetail from "./GameDetail";
import CatalogPage from "./CatalogPage";

const MainContent = () => {
    return (
        <main id="main-content">
            <WelcomWorldPage />
            <LogInPage />
            <RegisterPage />
            <CreatePage />
            <EditPage />
            <GameDetail />
            <CatalogPage />
        </main>
    );
};

export default MainContent