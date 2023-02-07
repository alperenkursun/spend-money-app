import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { selectItems } from "../../../redux/moneySlice";

function Items() {
  const items = useSelector(selectItems);

  return (
    <div className="grid grid-cols-3 gap-2.5">
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Item item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default Items;
