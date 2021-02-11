import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Root from "./Root.js";

function App() {
  return (
    <div className="App">
      <Root>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Root>
    </div>
  );
}

export default App;
