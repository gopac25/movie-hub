import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesWatched } from "../actions";
import { MovieList } from "./MovieList";

let BucketList = () => {
   const movies = useSelector(state => state.movies.watchedMovies);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchMoviesWatched());
   }, [dispatch]);

   if (movies) {
      return (
         <div className="row no-gutters">
            <div className="col-md-12">
               <h2>Watched Movies</h2>
               <hr />
            </div>
            <MovieList movies={movies} />;
         </div>
      );
   } else {
      return (
         <div className="row no-gutters">
            <h4>Loading.....</h4>
         </div>
      );
   }
};
export default BucketList;
