import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
function App() {
  return (
    // BEM naming convention
    <Router>
      <div className="app">
        {/* <h1>Hello, My name is Ankit Kumar and I'm gonna build the Amazon Store </h1> */}
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>CheckOut Page h BC</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
