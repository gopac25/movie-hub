import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieRecommendations } from "../actions";
import { MovieList } from "./MovieList";
import { DisplayMovie } from "./DisplayMovie";

const Recommendations = () => {
   const dispatch = useDispatch();
   const movies = useSelector(state => state.movies.recommendedMovies);

   useEffect(() => {
      dispatch(fetchMovieRecommendations());
   }, [dispatch]);

   if (movies) {
      return (
         <div className="row no-gutters">
            <div className="col-md-8 col-sm-6 col-xs-6">
               <div className="col-md-12 pt-3">
                  <h4>Recommended Movies</h4>
                  <hr />
               </div>
               <MovieList movies={movies} />;
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 p-4">
               <h5 className="text-center">Know More about the Movie</h5>
               <hr />
               <DisplayMovie />
            </div>
         </div>
      );
   } else {
      return (
         <div className="row no-gutters">
            <h1>Movies</h1>
            <hr />
            <h4>Loading.....</h4>
         </div>
      );
   }
};

export default Recommendations;
