import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./components/Container/Container";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
function render() {
  root.render(<Container />);
}
render();
