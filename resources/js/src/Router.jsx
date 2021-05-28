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
//auth pages
import Profile from "./pages/Profile";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomeGuest />
                </Route>
                <GuestMiddleware path="/login" component={Login} />
                <GuestMiddleware path="/register" component={Register} />

                <AuthMiddleware path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
};

export default Routes;
