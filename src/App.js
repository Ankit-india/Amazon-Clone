
import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route}
  from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';

function App() {
  const [{},dispatch]=useStateValue();

  useEffect(() => {
    // will run only once when the app component loads....

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>',authUser);

      if(authUser) {
        // the  userr just logged in. the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  },[]);
  return (
    // BEM naming convention
    <Router>
      <div className="app">
        {/* <h1>Hello, My name is Ankit Kumar and I'm gonna build the Amazon Store </h1> */}

        <Switch>
          <Route path="/login">
            {/* <h2>This is the login page aur kya lega bc</h2> */}
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          {/* <Route path="/prime">
            <Prime />
          </Route> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
