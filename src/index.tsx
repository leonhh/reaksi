import React, { Component } from "react";
import ReactDOM from "react-dom";

const App: React.FC<{}> = () => {
  return <div>test</div>;
};

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
