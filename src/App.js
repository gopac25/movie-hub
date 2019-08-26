import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Explore from "./components/Explore";
import Recommendations from "./components/Recommendations";
import BucketList from "./components/BucketList";
import Profile from "./components/Profile";
import Watched from "./components/Watched";
import Nav from "./components/Nav";

import "./App.css";

class AppComponent extends React.Component {
   state = {
      title: "Movies Bucket"
   };

   componentDidMount() {}

   render() {
      return (
         <Router>
            <div className="App">
               <Nav />
               <Switch>
                  <Route path="/" exact component={Recommendations}></Route>
                  <Route path="/explore" component={Explore}></Route>
                  <Route path="/bucketlist" component={BucketList}></Route>
                  <Route path="/watched-movies" component={Watched}></Route>
                  <Route path="/profile" component={Profile}></Route>
               </Switch>
            </div>
         </Router>
      );
   }
}

export default AppComponent;
