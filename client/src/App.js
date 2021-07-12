import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainRoute from "./components/MainRoute/MainRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import ParcelList from "./pages/ParcelList/ParcelList";
import User from "./pages/User/User";
import UserCreate from "./pages/UserCreate/UserCreate";
import Login from "./pages/Login/Login";
import "./App.css";

function App() {
	return (
		<Router>
			<Switch>
				<PrivateRoute exact path="/" component={Home} />
				<PrivateRoute path="/parcels" component={ParcelList} />
				<PrivateRoute exact path="/users" component={UserList} />
				<PrivateRoute path="/users/create" component={UserCreate} />
				<PrivateRoute path="/users/:userId" component={User} />
				<MainRoute path="/login" component={Login} />
			</Switch>
		</Router>
	);
}

export default App;
