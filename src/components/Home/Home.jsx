import React, {useState, useEffect, useRef} from 'react';
import Music from "./Music/Music";
import Spinner from "../Spinner/Spinner";
import {getTopTracks} from "../../actions/getTopTkacks";
import { connect } from 'react-redux';


const HomePage = ({getTopTracks, music, loading, error}) => {

    const [page, setPage] = useState(1);
    const [element, setElement] = useState(null);

    useEffect(() => {

        getTopTracks(page);

    }, []);

    useEffect(() => {

        const currentElement = element;
        const currentObserver = observer.current;

        if(currentElement) {
            currentObserver.observe(currentElement);
        }

        return (() => {
            if(currentElement) {
                currentObserver.unobserve(currentElement);
            }
        })

    }, [element]);

    const options = {
        threshold: 1.0
    };

    const callback = function(entries) {
        const first = entries[0];

        if(first.isIntersecting) {
            getTopTracks(page + 1);
            setPage(page + 1);
        }
    };

    const observer = useRef(new IntersectionObserver(callback, options));


    if (loading) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }


    return (
        <div id="#scrollArea">
            <Music listSongs={music} setElement={setElement}/>
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

