import React from 'react';
import Spinner from "../../Spinner/Spinner";
import {Link} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import "./FoundTracks.scss";

const FoundTracks = ({foundTracks, loading}) => {

    if (loading) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }

    return (
        <div className="track">
            <ul className="track__list">
                <h6 className="track__head">
                    <div className="track__wrapper">
                        Name
                    </div>

                    <div>
                        Artist
                    </div>
                </h6>

                {foundTracks.hasOwnProperty('track')?
                foundTracks.track.map(track => (
                    <li className="track__item" key={uuidv4()}>
                        <div className="track__wrapper">
                            <a href={track.url} className="track__link">
                                {track.name}
                            </a>
                        </div>

                        <Link to={`/artist/${track.artist}`} className="track__link">
                            {track.artist}
                        </Link>
                    </li>
                )):
                <p></p>}
            </ul>
        </div>
    )
};

export default FoundTracks;
