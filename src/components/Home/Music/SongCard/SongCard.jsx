import React from 'react';
import './SongCard.scss';
import {Link} from "react-router-dom";

const SongCard = ({song}) => {

    return (
        <div className="song">
            <img src={song.image[2]["#text"]} className="song__img" alt="caver"/>

            <div className="song__wrapper">
                Name:&nbsp;
                <a href={song.url} className="song__link">
                    {song.name}
                </a>
            </div>

            <div className="song__wrapper">
                Artist:&nbsp;
                <Link to={`/artist/${song.artist.name.replace(' ', '+')}`} className="song__link">
                    {song.artist.name}
                </Link>
            </div>

        </div>
    );
};

export default SongCard;
