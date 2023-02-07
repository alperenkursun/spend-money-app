import React from "react";
import ReceıptItem from "./ReceiptItem";
import { useSelector } from "react-redux";
import { selectReceipt } from "../../../redux/moneySlice";

function Receipt() {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  let receipts = useSelector(selectReceipt);
  let totalCost = 0;
  receipts.map((item) => (totalCost += item.piece * item.price));
  return (
    <>
      {receipts.length > 0 && (
        <div className="bg-white text-center max-w-full text-lg p-3.5 pb-8 mt-2.5">
          <div className="text-3xl p-3.5 pb-6 font-bold ">Your Receipt</div>
          {receipts.map((receipt, index) => (
            <ReceıptItem
              name={receipt.name}
              piece={receipt.piece}
              cost={receipt.piece * receipt.price}
              index={index}
            />
          ))}
          <div
            className="font-bold mx-auto mt-2.5 pt-2.5 flex justify-between"
            style={{ maxWidth: "300px", borderTop: "1px solid #333" }}
          >
            <span>TOTAL</span>
            <div className="text-right" style={{ color: "#24c486" }}>
              ${numberWithCommas(totalCost)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Receipt;
