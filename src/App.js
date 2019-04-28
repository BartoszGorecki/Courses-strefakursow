import React from "react";
import { Container } from "./style/App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Header from "./components/Header";

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
