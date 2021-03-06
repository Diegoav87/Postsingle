import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/common/PrivateRoutes";
import { Provider } from "react-redux";
import Store from "./Store";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { loadUser } from "./actions/auth";
import { useEffect } from "react";
import PostPage from "./components/PostPage/PostPage";
import EditPost from "./components/EditPost/EditPost";

// Alert options
const alertOptions = {
  timeout: 3000,
};

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Provider store={Store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Switch>
              <PrivateRoute exact path="/edit/:id" component={EditPost} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/" component={Home} />
              <Route exact path="/post/:id" component={PostPage} />
            </Switch>
          </Router>
        </AlertProvider>
      </Provider>
    </div>
  );
}

export default App;
