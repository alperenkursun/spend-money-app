import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editItemPiece,
  incItemPiece,
  decItemPiece,
  selectTotalMoney,
} from "../../../../redux/moneySlice";

function Item(props) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let totalMoney = useSelector(selectTotalMoney);

  function displayChange(num) {
    num = num.toString();
    for (var i = 0; i < num.length; i++) {
      if (num.charAt(i) !== "0") {
        let res = num.substr(i);
        return res;
      }
    }
    return "0";
  }

  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "." || e.key === "-" || e.key === "e" || e.key === ",") {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      dispatch(editItemPiece({ value: 0, index: props.index }));
    } else {
      dispatch(
        editItemPiece({
          value: parseInt(e.target.value),
          index: props.index,
        })
      );
    }
  };

  return (
    <div className="max-w-100 bg-white text-center text-lg py-5 px-4 w-full">
      <img
        src={`${props.item.img}`}
        alt="img"
        className="d-block my-4 mx-auto h-32 max-w-100 object-contain select-none"
      />
      <div className="text-2xl font-bold">{props.item.name}</div>
      <div className="text-xl" style={{ color: "#24c486" }}>
        ${numberWithCommas(props.item.price)}
      </div>
      <div className="text-2xl font-bold grid grid-cols-3 gap-2.5 mt-6">
        <button
          className={`text-base border-none  touch-manipulation py-2.5 px-3 rounded select-none ${
            props.item.piece > 0 ? "cursor-pointer" : "cursor-default"
          }`}
          style={{
            background: props.item.piece
              ? "linear-gradient(180deg,#f53b82,#f53b57)"
              : "#f1f2f6",
            color: props.item.piece ? "white" : "#333",
          }}
          onClick={() => {
            dispatch(decItemPiece({ index: props.index }));
          }}
          disabled={props.item.piece > 0 ? false : true}
        >
          Sell
        </button>
        <input
          id="number"
          type="number"
          className="text-base text-center py-2.5 px-3 rounded w-full appearance-none "
          style={{
            border: "1px solid #b2bec3",
            color: "#333",
          }}
          pattern="\d*"
          min="0"
          defaultValue="0"
          value={displayChange(props.item.piece)}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <button
          className={`text-base border-none  touch-manipulation py-2.5 px-3 rounded select-none text-white ${
            (props.item.name === "NBA Team" && props.item.piece === 30) ||
            (props.item.name === "Mona Lisa" && props.item.piece === 1) ||
            totalMoney < props.item.price
              ? "cursor-default"
              : "cursor-pointer"
          }`}
          style={{
            background:
              (props.item.name === "NBA Team" && props.item.piece === 30) ||
              (props.item.name === "Mona Lisa" && props.item.piece === 1) ||
              totalMoney < props.item.price
                ? "#f1f2f6"
                : "linear-gradient(180deg,#2ecc71,#1abc9c)",

            color:
              (props.item.name === "NBA Team" && props.item.piece === 30) ||
              (props.item.name === "Mona Lisa" && props.item.piece === 1) ||
              totalMoney < props.item.price
                ? "#333"
                : "#fff",
          }}
          onClick={() => {
            dispatch(
              incItemPiece({
                index: props.index,
              })
            );
          }}
          disabled={
            (props.item.name === "NBA Team" && props.item.piece === 30) ||
            (props.item.name === "Mona Lisa" && props.item.piece === 1) ||
            totalMoney < props.item.price
              ? true
              : false
          }
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Item;
