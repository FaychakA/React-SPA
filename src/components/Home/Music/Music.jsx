import React from 'react';
import {v4 as uuidv4} from 'uuid';
import SongCard from "./SongCard/SongCard";
import './Music.scss';


const Music = ({listSongs, setElement}) => {

    return (
        <div className="music">
            <ul className="music__list">
                {listSongs.map((song, index) => {
                    if ((listSongs.length - 1) === index) {
                        return (
                            <li ref={setElement} className="music__item" key={uuidv4()}>
                                <SongCard
                                    song={song}
                                />
                            </li>
                        )
                    } else {
                        return (
                            <li className="music__item" key={uuidv4()}>
                                <SongCard
                                    song={song}
                                />
                            </li>)}}
                        )
                    }
            </ul>
        </div>
    );
};

export default Music;
