import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink 
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Homepage from '../src/pages/Homepage/Homepage';
import Loginpage from '../src/pages/Login/Login';
import Registerpage from '../src/pages/Register/Register';

function App() {
  return (
    <div className="App">
       {/* <span class="flaticon-innovation"></span> */}    
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Loginpage} />
          <Route path="/register" component={Registerpage} />  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
