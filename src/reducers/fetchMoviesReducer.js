import {
   FETCH_MOVIES,
   FETCH_MOVIES_RECOMMENDATIONS,
   FETCH_MOVIES_WATCHED,
   FETCH_MOVIES_BUCKETLIST,
   FETCH_MOVIE_INFO
} from "../actions";
export default (state = {}, action) => {
   switch (action.type) {
      case FETCH_MOVIES:
         return {
            ...state, //prev state
            allMovies: action.payload //movies info added
         };
      case FETCH_MOVIES_RECOMMENDATIONS:
         return {
            ...state, //prev state
            recommendedMovies: action.payload //movies info added
         };
      case FETCH_MOVIES_WATCHED:
         return {
            ...state, //prev state
            watchedMovies: action.payload //movies info added
         };
      case FETCH_MOVIES_BUCKETLIST:
         return {
            ...state, //prev state
            bucketListMovies: action.payload //movies info added
         };
      case FETCH_MOVIE_INFO:
         return {
            ...state,
            selectedMovie: action.payload
         };
      default:
         return state;
   }
};
