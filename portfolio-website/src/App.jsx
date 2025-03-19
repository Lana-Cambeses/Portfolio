import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
//import Dashboard from "./pages/Dashboard";
//import Login from "./components/Login";

//<Route path="/dashboard" component={Dashboard} />
//<Route path="/login" component={Login} />

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

