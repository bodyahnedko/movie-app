import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Search } from "./pages/Search";
import { Navbar } from "./components/Navbar";
import { MovieDetail } from "./pages/Movie-detail";
import { MoviedbState } from "./context/movidedb/MoviedbState";

function App() {
    return (
        <MoviedbState>
            <BrowserRouter>
                <Navbar />
                <div className="container pb-5">
                    <Switch>
                        <Route path={"/about"} component={About} />
                        <Route path={"/search"} component={Search} />
                        <Route path={"/:number"} exact component={Home} />
                        <Route path="/movie/:number" component={MovieDetail} />
                        <Route path="/">
                            <Redirect to="/1" />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </MoviedbState>
    );
}

export default App;
