import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovieInfo } from "../actions";

export const MovieList = props => {
   let [displayMovies, setDisplayMovies] = useState([]);

   useEffect(() => {
      //console.log(props.movies);
      //let moviesData = props.movies;
      setDisplayMovies(props.movies);
      //console.log({ displayMovies });
   }, [props.movies]);

   let dispatch = useDispatch();

   let showMovie = movieId => {
      dispatch(fetchMovieInfo(movieId));
      //console.log(movieId);
   };

   let allMovies = displayMovies.map((value, key) => {
      return (
         <div className="col-md-2" key={key}>
            <img
               id={"i" + value.id}
               onClick={() => showMovie(value.id)}
               className="img-fluid p-2 m-2 card"
               src={encodeURI(
                  "https://image.tmdb.org/t/p/w185/" + value.poster_path
               )}
            />
            <p className="text-capitalize text-center">{value.title}</p>
         </div>
      );
   });

   return (
      <div className="row no-gutters">
         {allMovies}
         <div className="modal fade" id="movieInfoModal" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalCenterTitle">
                        Modal title
                     </h5>
                     <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                     >
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                     <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                     >
                        Close
                     </button>
                     <button type="button" className="btn btn-primary">
                        Save changes
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
