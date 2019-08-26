import { combineReducers } from "redux";
import fetchMoviesReducer from "./fetchMoviesReducer";

const rootReducer = combineReducers({
   movies: fetchMoviesReducer
});

export default rootReducer;
