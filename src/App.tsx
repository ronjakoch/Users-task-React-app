import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from './pages/AddUser';
import AllUsers from "./pages/AllUsers";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/AllUsers">
            <AllUsers/>
          </Route>
          <Route path="/AddUser">
            <AddUser/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
