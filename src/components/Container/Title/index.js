import React from "react";

function Title() {
  return (
    <div className="text-3xl bg-white py-8 px-5 mb-2.5 font-bold text-center leading-5">
      <img
        src="https://neal.fun/spend/billgates.jpg"
        alt="img"
        className="w-32 h-32 d-block select-none mt-2.5 mb-6 ml-auto mr-auto justify-center"
        style={{ borderRadius: "125px" }}
      />
      Spend Bill Gates' Money
    </div>
  );
}

export default Title;
