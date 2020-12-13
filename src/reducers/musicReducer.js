import {START_LOAD_TOP_TRACKS, LOADED_TOP_TRACKS, ERROR_TOP_TRACKS} from "../actions/types";


const initialState = {
    loading: false,
    music: [],
    error: null
};

export default function musicReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOAD_TOP_TRACKS:
            return {
                ...state,
                loading: true
            };
        case LOADED_TOP_TRACKS:
            console.log(action.payload, "action.payload");
               return {
                ...state,
                loading: false,
                error: null,
                music: [...state.music, ...action.payload.tracks.track]
            };
        case ERROR_TOP_TRACKS:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}


