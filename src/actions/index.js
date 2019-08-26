export const FETCH_MOVIES_RECOMMENDATIONS = "fetch-movies-recommendations";
export const FETCH_MOVIES_BUCKETLIST = "fetch-movies-bucketlist";
export const FETCH_MOVIES_WATCHED = "fetch-movies-watched";
export const FETCH_MOVIES = "fetch-movies";
export const FETCH_MOVIE_INFO = "fetch-movie-info";
export const ADD_MOVIE_BUCKETLIST = "add-movie-bucketlist";
export const ADD_MOVIE_WACTHED = "add-movie-watched";
export const REMOVE_MOVIE_BUCKETLIST = "remove-movie-bucketlist";

export const fetchMovieRecommendations = () => dispatch => {
   fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e468287d791e0e262ffb642257c82049&primary_release_year=2015&with_genres=18"
   )
      .then(response => {
         if (response.status !== 200) {
            console.log(
               "Looks like there was a problem. Status Code: " + response.status
            );
            return;
         }

         // Examine the text in the response
         response.json().then(data => {
            //console.log("Data Fetched---");
            //console.log(data.results);
            return dispatch({
               type: FETCH_MOVIES_RECOMMENDATIONS,
               payload: data.results
            });
         });
      })
      .catch(function(err) {
         console.log("Fetch Error :-S", err);
      });
};

export const fetchMoviesWatched = () => dispatch => {
   fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e468287d791e0e262ffb642257c82049&primary_release_year=2015&with_genres=18&page=35"
   )
      .then(response => {
         if (response.status !== 200) {
            console.log(
               "Looks like there was a problem. Status Code: " + response.status
            );
            return;
         }

         // Examine the text in the response
         response.json().then(data => {
            //console.log("Data Fetched---");
            //console.log(data.results);
            return dispatch({
               type: FETCH_MOVIES_WATCHED,
               payload: data.results
            });
         });
      })
      .catch(function(err) {
         console.log("Fetch Error :-S", err);
      });
};

export const fetchMoviesBucketList = () => dispatch => {
   fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e468287d791e0e262ffb642257c82049&primary_release_year=2015&with_genres=18&page=24"
   )
      .then(response => {
         if (response.status !== 200) {
            console.log(
               "Looks like there was a problem. Status Code: " + response.status
            );
            return;
         }

         // Examine the text in the response
         response.json().then(data => {
            //console.log("Data Fetched---");
            //console.log(data.results);
            return dispatch({
               type: FETCH_MOVIES_BUCKETLIST,
               payload: data.results
            });
         });
      })
      .catch(function(err) {
         console.log("Fetch Error :-S", err);
      });
};

export const fetchMovies = () => dispatch => {
   fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e468287d791e0e262ffb642257c82049&primary_release_year=2002&with_genres=18"
   )
      .then(response => {
         if (response.status !== 200) {
            console.log(
               "Looks like there was a problem. Status Code: " + response.status
            );
            return;
         }

         // Examine the text in the response
         response.json().then(data => {
            //console.log("Data Fetched---");
            //console.log(data.results);
            return dispatch({
               type: FETCH_MOVIES,
               payload: data.results
            });
         });
      })
      .catch(function(err) {
         console.log("Fetch Error :-S", err);
      });
};

export const fetchMovieInfo = movieID => dispatch => {
   fetch(
      "https://api.themoviedb.org/3/movie/" +
         movieID +
         "?api_key=e468287d791e0e262ffb642257c82049"
   )
      .then(response => {
         if (response.status !== 200) {
            console.log(
               "Looks like there was a problem. Status Code: " + response.status
            );
            return;
         }

         // Examine the text in the response
         response.json().then(data => {
            //console.log("Data Fetched---");
            console.log(data);
            return dispatch({
               type: FETCH_MOVIE_INFO,
               payload: data
            });
         });
      })
      .catch(function(err) {
         console.log("Fetch Error :-S", err);
      });
};
