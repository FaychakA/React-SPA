import {START_LOAD_ARTIST_INFO, LOADED_ARTIST_INFO, ERROR_ARTIST_INFO} from "../actions/types";

const initialState = {
    loading: false,
    info: {},
    error: null,
};

export default function artistReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOAD_ARTIST_INFO:
            return {
                ...state,
                loading: true
            };
        case LOADED_ARTIST_INFO:
            return {
                ...state,
                loading: false,
                error: null,
                info: {...state.info, ...action.payload.artist}
            };
        case ERROR_ARTIST_INFO:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}
