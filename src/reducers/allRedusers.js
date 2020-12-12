import {combineReducers} from "redux";
import musicReducer from "./musicReducer";
import artistReducer from "./artistReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
    music: musicReducer,
    artist: artistReducer,
    foundTracks: searchReducer,
});
