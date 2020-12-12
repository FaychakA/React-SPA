import {START_LOAD_ARTIST_INFO, LOADED_ARTIST_INFO, ERROR_ARTIST_INFO} from "./types";


export const getArtistInfo = (name) => {
    return dispatch => {
        dispatch(getDataStarted());

        fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=c47452df41d75f8668f4640f376f4ee9&format=json`)
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
    type: START_LOAD_ARTIST_INFO
});

const getDataSuccess = data => ({
    type: LOADED_ARTIST_INFO,
    payload: {
        ...data
    }
});

const getDataFailure = error => ({
    type: ERROR_ARTIST_INFO,
    payload: {
        error
    }
});
