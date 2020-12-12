import {START_LOAD_SEARCH, LOADED_SEARCH, ERROR_SEARCH} from "./types";

export const getSearch = (name) => {
    return dispatch => {
        dispatch(getDataStarted());

        fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=c47452df41d75f8668f4640f376f4ee9&format=json`)
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
            })
    };
};

const getDataStarted = () => ({
    type: START_LOAD_SEARCH
});

const getDataSuccess = data =>({
    type: LOADED_SEARCH,
    payload: {
        ...data
    }
});

const getDataFailure = error => ({
    type: ERROR_SEARCH,
    payload: {
        error
    }
});
