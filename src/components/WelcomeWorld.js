import {useState ,useEffect } from 'react';

import * as gameServices from '../services/gameServices.js';
import LatestGameCard from './LatestGameCard.js';

const WelcomWorldPage = ({
    navigationChngeHandler,
}) => {
    const [game, setGame] = useState([]);

     useEffect(() => {
        gameServices.getLastest()
        .then(result => {
            setGame(result);
        });
     },[])
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="/images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                    
                    {game.length > 0
                    ? game.map(x => <LatestGameCard navigationChngeHandler={navigationChngeHandler} game={x} />)
                    : <p className="no-articles">No games yet</p>
                    }
            </div>
        </section>
    );
};

export default WelcomWorldPage;