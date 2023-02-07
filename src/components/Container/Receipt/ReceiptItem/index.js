import React from "react";

function ReceıptItem({ name, piece, cost, index }) {
  let k = cost / 1000;
  console.log(k);
  console.log("asdasd", cost / 1000000000);
  // let costDisplay = (costt) => {
  //   if (0 < costt < 1000) {
  //     return cost;
  //   } else if (1000 <= cost < 1000000) {
  //     let copyy = costt / 1000;
  //     console.log("copyy", copyy);
  //     return copyy;
  //   } else if (1000000 <= costt < 1000000000) {
  //     return costt / 1000000;
  //   } else if (1000000000 <= costt) {
  //     return costt / 1000000000;
  //   }
  // };
  return (
    <div
      className="mx-auto text-center grid gap-y-2.5 text-lg"
      style={{ maxWidth: "290px", gridTemplateColumns: "170px 45px 75px" }}
      key={index}
    >
      <div className="text-left  text-ellipsis">{name}</div>
      <div className="text-left">x{piece}</div>
      <div className="text-right font-bold" style={{ color: "#24c486" }}>
        ${" "}
        {cost > 1000000000
          ? (cost / 1000000000).toFixed(1)
          : cost > 1000000
          ? cost / 1000000
          : cost > 1000
          ? cost / 1000
          : cost}
        {cost > 1000000000
          ? "b"
          : cost > 1000000
          ? "m"
          : cost > 1000
          ? "k"
          : ""}
      </div>
    </div>
  );
}

export default ReceıptItem;
