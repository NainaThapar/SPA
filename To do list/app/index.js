import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Main from "../components/Main/main";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <Main></Main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
