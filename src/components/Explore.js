import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../actions";
import { MovieList } from "./MovieList";

const Explore = () => {
   const movies = useSelector(state => state.movies.allMovies);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchMovies());
   }, [dispatch]);

   if (movies) {
      return (
         <div className="row no-gutters">
            <div className="col-md-12">
               <h2>Find Movies</h2>
               <hr />
            </div>
            <MovieList movies={movies} />;
         </div>
      );
   } else {
      return (
         <div className="row text-center">
            <h1>Explore Movies</h1>
            <hr />
            <h4>Loading.....</h4>
         </div>
      );
   }
};

export default Explore;
