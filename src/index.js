import ClayAlert from "@clayui/alert";
import * as React from "react";
import ReactDOM from "react-dom";
import "@clayui/css/lib/css/atlas.css";

function App() {
  return (
    <div className="App">
      <h1>{"Hello, my empty React application"}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
