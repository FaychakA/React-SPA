import React, { useEffect } from 'react';
import Music from "./Music/Music";
import Spinner from "../Spinner/Spinner";
import {getTopTracks} from "../../actions/getTopTkacks";
import { connect } from 'react-redux';


const HomePage = ({getTopTracks, music, loading, error}) => {

    useEffect(() => {

        getTopTracks();

    }, []);

    if (loading) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }


    return (
        <div>
            <Music listSongs={music}/>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        getTopTracks:() => {
            dispatch(getTopTracks());
        }
    };
};

const mapStateToProps = state => {
    return {
        music: state.music.music,
        loading: state.music.loading,
        error: state.music.error
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

