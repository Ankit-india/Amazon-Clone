import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Checkout from './Checkout';
// import Prime from './Yourprime';
// import Login from './Loginpage';
function App() {
  return (
    // BEM naming convention
    <Router>
      <div className="app">
        {/* <h1>Hello, My name is Ankit Kumar and I'm gonna build the Amazon Store </h1> */}
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/prime">
            <Prime />
          </Route> */}
          <Route path="/login">
            <h2>This is the login page aur kya lega bc</h2>
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
