import {START_LOAD_TOP_TRACKS, LOADED_TOP_TRACKS, ERROR_TOP_TRACKS} from "./types";


export const getTopTracks = (pageNumber) => {
    return dispatch => {
        dispatch(getDataStarted());

        fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=c47452df41d75f8668f4640f376f4ee9&page=${pageNumber}&format=json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('error');
            })
            .then(res => {
                dispatch(getDataSuccess(res));
            })
            .catch(err => {
                dispatch(getDataFailure(err.message));
            });
    };
};

const getDataStarted = () => ({
    type: START_LOAD_TOP_TRACKS
});

const getDataSuccess = data => ({
    type: LOADED_TOP_TRACKS,
    payload: {
        ...data
    }
});

const getDataFailure = error => ({
    type: ERROR_TOP_TRACKS,
    payload: {
        error
    }
});
