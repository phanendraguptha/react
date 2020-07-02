import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/Movies";
import Rentals from "./components/Rentals";
import Customers from "./components/Customers";
import NotFound from "./components/NotFound";
import Navbar from "./common/Navbar";
import MovieForm from "./components/MovieForm";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container mt-4">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
