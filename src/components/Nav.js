import React from "react";
import { Link } from "react-router-dom";

let Nav = () => {
   return (
      <nav
         id="appNav"
         className="navbar navbar-expand-md navbar-dark bg-primary justify-content-between"
      >
         <h2 className="navbar-brand">
            <i className="fa fa-video-camera" aria-hidden="true"></i>
            Movie Bucket
         </h2>
         <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
         ></button>
         <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
               <li className="nav-item">
                  <Link className="nav-link" to="/">
                     <i className="fa fa-home" aria-hidden="true"></i>
                     Recommendations
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/explore">
                     <i className="fa fa-search" aria-hidden="true"></i>
                     Explore <span className="sr-only"></span>
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/bucketlist">
                     <i className="fa fa-check-circle" aria-hidden="true"></i>
                     Bucket List
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/watched-movies">
                     <i className="fa fa-eye" aria-hidden="true"></i>
                     Watched Movies
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                     <i className="fa fa-user-circle" aria-hidden="true"></i>
                     Profile
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
};
export default Nav;
