import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//middleware
import AuthComponent from "./middlewares/AuthComponent";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import GuestComponent from "./middlewares/GuestComponent";
import GuestMiddleware from "./middlewares/GuestMiddleware";
//pages
import HomeGuest from "./pages/HomeGuest";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomeGuest />
                </Route>
                <GuestMiddleware path="/login" component={Login} />
                <GuestMiddleware path="/register" component={Register} />
            </Switch>
        </Router>
    );
};

export default Routes;
