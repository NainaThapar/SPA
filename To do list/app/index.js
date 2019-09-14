import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Main from "../components/Main/main";

class App extends React.Component {
  render() {
    return (
      <div>
        <Main></Main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
