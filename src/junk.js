import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "./actions";
import { Nav } from "./components/Nav";
import { Router, Switch, Route } from "react-router";

import "./App.css";

class AppComponent extends React.Component {
   state = {
      title: "Movies Bucket",
      filter: ""
   };

   componentDidMount() {
      this.props.fetchMovies();
   }

   // setBorder(imgId) {
   //    if (
   //       document.getElementById("i" + imgId).classList.contains("card-flipper")
   //    ) {
   //       document
   //          .getElementById("i" + imgId)
   //          .classList.add("card-reverse-flipper");
   //    } else {
   //       document
   //          .getElementById("i" + imgId)
   //          .classList.remove("card-reverse-flipper");
   //    }
   //    document.getElementById("i" + imgId).classList.toggle("card-flipper");
   // }

   // searchMovies = event => {
   //    this.setState({ filter: event.target.value });
   //    //console.log(this.state.filter);
   // };

   render() {
      let imgData = this.props.movies.allMovies;
      if (imgData) {
         console.log(imgData);
         let imgUrls = imgData.map((value, key) => {
            //console.log(value);
            if (value.title.includes(this.state.filter)) {
               return (
                  <div className="col-md-2" key={key}>
                     <img
                        id={"i" + value.id}
                        //onClick={this.setBorder.bind(this, value.id)}
                        className="img-fluid p-2 m-2 card"
                        src={encodeURI(
                           "https://image.tmdb.org/t/p/w185/" +
                              value.poster_path
                        )}
                     />
                     <p className="text-capitalize text-center">
                        {value.title}
                     </p>
                  </div>
               );
            }
         });
         return (
            <div className="row no-gutters">
               <div className="col-md-12">
                  <Nav />
                  <h1 className="text-center pt-3">MovieBucket</h1>
                  <input
                     type="text"
                     className="w-50"
                     placeholder="Seach for Movies here"
                     //value={this.state.filter}
                     //onChange={this.searchMovies}
                  />
                  <hr />
                  <div className="row no-gutters">{imgUrls}</div>
               </div>
            </div>
         );
      } else {
         return (
            <div>
               <h1>{this.state.title}</h1>
               <hr />
               <p>Loading . . . .</p>
            </div>
         );
      }
   }
}

const mapStateToProps = state => {
   return { movies: state.movies };
};

export default connect(
   mapStateToProps,
   { fetchMovies }
)(AppComponent);

//this.setState({ title: "New Title" });
fetch(
   "https://api.themoviedb.org/3/discover/movie?api_key=e468287d791e0e262ffb642257c8204&primary_release_year=2015&with_genres=18"
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
         this.setState({ movies: data.results });
      });
   })
   .catch(function(err) {
      console.log("Fetch Error :-S", err);
   });

fetch(
   "https://pixabay.com/api/?key=13396981-e8096db98bf83ea623ed8a7ae&q=nature"
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
         this.setState({ images: data.hits });
      });
   })
   .catch(function(err) {
      console.log("Fetch Error :-S", err);
   });
