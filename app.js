import React from "react";
import { createRoot } from "react-dom/client";

const card = (key, pic, title, des, price) => {
  return (
    <div className="card" key={key}>
      <div className="image">
        <img src={pic} alt="iphone" />
      </div>
      <div className="card_text">
        <h3>{title}</h3>
        <h4>${price}</h4>
        <p>{des}</p>
      </div>
    </div>
  );
};
const root = createRoot(document.querySelector("#root"));
fetch("https://dummyjson.com/products/search?q=phone")
  .then((res) => res.json())
  .then((result) => {
    let data = result.products;
    console.log(data);
    let cards = data.map((value) => {
      return card(
        value.id,
        value.thumbnail,
        value.title,
        value.description,
        value.price
      );
    });
    const  root_container = <div><h1>Get to know iPhone.</h1>
    <div className="container">{cards}</div></div>
    root.render(root_container);
  });
