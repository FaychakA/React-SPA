import {START_LOAD_SEARCH, LOADED_SEARCH, ERROR_SEARCH} from "../actions/types";

const initialState = {
    loading: false,
    foundTracks: {},
    error: null,
};

export default  function searchReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOAD_SEARCH:
            return {
                ...state,
                loading: true
            };
        case LOADED_SEARCH:
            return {
                ...state,
                loading: false,
                error: null,
                foundTracks: {...state.foundTracks, ...action.payload.results.trackmatches}
            };
        case ERROR_SEARCH:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}
