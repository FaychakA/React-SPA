import React, {useEffect} from 'react';
import Spinner from "../Spinner/Spinner";
import {getArtistInfo} from "../../actions/getArtistInfo";
import connect from "react-redux/es/connect/connect";
import './Artist.scss';


const Artist = ({getArtistInfo, info, loading, error, ...props}) => {

    useEffect(() => {

        getArtistInfo(props.match.params.artistName);

    }, []);

    if (loading) {
        return (
            <div>
                <Spinner/>
            </div>
        )
    }

    return (
        <div className="artist">
            <h1 className="artist__name">{info.name}</h1>

            <div className="artist__wrapper">
                <img src={info && info.image && info.image[1]['#text']} className="artist__img" />

                <ul className="artist__tags-list">
                    {info && info.tags && info.tags.tag.map( tag => (
                        <li className="artist__tags-item">
                            {tag.name}
                        </li>
                    ))}
                </ul>
            </div>

            <p className="artist__info" dangerouslySetInnerHTML={{__html : info && info.bio && info.bio.content}}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        getArtistInfo: (name) => {
            dispatch(getArtistInfo(name));
        }
    };
};

const mapStateToProps = state => {
    return {
        info: state.artist.info,
        loading: state.artist.loading,
        error: state.artist.error
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Artist);
