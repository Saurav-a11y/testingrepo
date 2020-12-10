import React from "react";

import Header from "./Component/Header/Header";
import HomePage from "./HomePage/HomePage";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}
