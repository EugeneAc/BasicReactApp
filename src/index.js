import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}

class Hello extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox2</h1>
      </div>
    );
  }
}

const element = React.createElement("h1", {}, "Hello CodeSandbox3");

class Message extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox4</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("element1"));

ReactDOM.render(<Hello />, document.getElementById("element2"));

ReactDOM.render(element, document.getElementById("element3"));

ReactDOM.render(<Message />, document.getElementById("element4"));
