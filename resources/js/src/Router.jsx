import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//middleware
import AuthComponent from "./middlewares/AuthComponent";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import GuestComponent from "./middlewares/GuestComponent";
import GuestMiddleware from "./middlewares/GuestMiddleware";
//pages
import HomeGuest from "./pages/HomeGuest";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomeGuest />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
