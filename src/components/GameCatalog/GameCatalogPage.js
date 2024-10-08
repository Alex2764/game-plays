import { useState, useEffect } from 'react'

import GameCard from './GameCard';
import * as gameServices from '../../services/gameServices';

const GameCatalogPage = ({
    navigationChngeHandler,
}) => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            gameServices.getAll()
                .then(gameData => setGames(gameData));
        }, 1000);

    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0
                ? games.map(game => <GameCard key={game._id} game={game} navigationChngeHandler={navigationChngeHandler}/>)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
};

export default GameCatalogPage;