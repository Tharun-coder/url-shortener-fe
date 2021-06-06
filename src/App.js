import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgetPass from "./components/ForgetPass";
import UpdatePass from "./components/UpdatePass";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/forget-password" exact component={ForgetPass} />
          <Route path="/updatepass" exact component={UpdatePass} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
