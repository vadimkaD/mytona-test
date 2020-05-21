import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContent from "../AppContent/AppContent";
import Login from "../Login/Login";
import PrivateRoute from "../common/PrivateRoute/PrivateRoute";

const App: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/">
          <AppContent />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
