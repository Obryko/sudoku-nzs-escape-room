import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SudokuPlayground } from "./SudokuPlayground";
import { ActivePop } from "./ActivePop";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={SudokuPlayground} />
          <Route path="/pop" component={ActivePop} />
        </>
      </Router>
    );
  }
}

export default App;
