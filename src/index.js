import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import CounterList from "./components/counterList";
const App = () => {
  return <CounterList />;
};

reactDom.render(<App />, document.getElementById("root"));
