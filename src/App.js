import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import MainLayout from "./routes/MainLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MainLayout>
            <Detail />
          </MainLayout>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
