import React from "react";
import Items from "./Items";
import Receipt from "./Receipt";
import Title from "./Title";
import TotalMoney from "./TotalMoney";

function Container() {
  return (
    <div
      className="ml-auto mr-auto"
      style={{ color: "#333", maxWidth: "1000px" }}
    >
      <Title />
      <TotalMoney />
      <Items />
      <Receipt />
    </div>
  );
}

export default Container;
