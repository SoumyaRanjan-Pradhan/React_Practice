import React from "react";
import { createRoot } from "react-dom/client";

const container = (
  <div
    className="container"
    id="container"
    style={{
      border: "1px solid gray",
      borderRadius: "4px",
      width: "300px",
      padding: "10px",
      backgroundColor: "yellow",
    }}
  >
    <h2 style={{ margin: "5px 0" }}>React Js</h2>
    <img src="cat.jpg" alt="cat" width="300" />
    <p>
      Welcome to the React documentation! This page will give you an
      introduction to the 80% of React concepts that you will use on a daily
      basis.
    </p>
  </div>
);

console.log(container);
const root = createRoot(document.querySelector("#root"));
root.render(container);
