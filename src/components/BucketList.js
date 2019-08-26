import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesBucketList } from "../actions";
import { MovieList } from "./MovieList";

let BucketList = () => {
   const movies = useSelector(state => state.movies.bucketListMovies);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchMoviesBucketList());
   }, [dispatch]);

   if (movies) {
      return (
         <div className="row no-gutters">
            <div className="col-md-12">
               <h2>Your Movies BucketList</h2>
               <hr />
            </div>
            <MovieList movies={movies} />;
         </div>
      );
   } else {
      return (
         <div className="row no-gutters">
            <h1>Explore Movies</h1>
            <hr />
            <h4>Loading.....</h4>
         </div>
      );
   }
};
export default BucketList;
