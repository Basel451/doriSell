import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContextWrapper from "./context/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Switch>
        <AuthContextWrapper>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </AuthContextWrapper>
      </Switch>
    </Router>
  );
}

export default App;
