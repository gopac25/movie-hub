import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const DisplayMovie = () => {
   const movieInfo = useSelector(state => state.movies.selectedMovie);
   if (movieInfo) {
      return (
         <div className="card border-primary" id="movieInfoDisplay">
            <div className="card-header bg-primary text-white m-0 p-0">
               <h4>
                  {movieInfo.title +
                     " (" +
                     movieInfo.release_date.slice(0, 4) +
                     ")"}
               </h4>
               <p>
                  Runtime : <i>{movieInfo.runtime} minutes</i> Rating :{" "}
                  <i>{movieInfo.vote_average}</i>
               </p>
            </div>
            <div className="card-body m-0 p-0">
               <ul class="list-group text-justify">
                  <img
                     id={"i" + movieInfo.id}
                     className="img-fluid p-2 m-2 card"
                     src={encodeURI(
                        "https://image.tmdb.org/t/p/w780" +
                           movieInfo.backdrop_path
                     )}
                  />
                  <li class="list-group-item">
                     <strong>Genres: </strong>
                     {movieInfo.genres.map((value, key) => {
                        return '"' + value.name + '" ';
                     })}
                  </li>
                  <li class="list-group-item">
                     <strong>Tagline: </strong>
                     {movieInfo.tagline}
                  </li>
                  <li class="list-group-item">
                     <strong>Plot: </strong>
                     {movieInfo.overview}
                  </li>
                  <li class="list-group-item">
                     <strong>Release Date: </strong>
                     {movieInfo.release_date}
                  </li>
                  <li class="list-group-item">
                     <strong>Production: </strong>
                     {movieInfo.production_companies.map((value, key) => {
                        return '"' + value.name + '" ';
                     })}
                  </li>
               </ul>
            </div>
         </div>
      );
   } else {
      return <h6>Please select a Movie</h6>;
   }
};
