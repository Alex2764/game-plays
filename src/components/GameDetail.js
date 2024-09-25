import { useState, useEffect } from "react";

import * as gameServices from '../services/gameServices.js';

const GameDetail = ({
    match,
    history,
}) => {
    const [game, setGame] = useState({});

    useEffect(() => {
        gameServices.getOne(match.params.gameId)
        .then(result => {
            setGame(result)
        });
    },[])

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>Bright</h1>
                    <span className="levels">{game.title}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                   {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <p className="no-comment">No comments.</p>
                </div>

                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
};

export default GameDetail;