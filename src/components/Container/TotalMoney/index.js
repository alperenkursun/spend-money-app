import React from "react";
import AnimatedNumber from "react-animated-number/build/AnimatedNumber";
import { useSelector } from "react-redux";
import { selectTotalMoney } from "../../../redux/moneySlice";
import "./styles.css";

function TotalMoney() {
  const totalMoney = useSelector(selectTotalMoney);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div
      className="text-white p-5 my-2.5 mx-0 text-3xl font-bold text-center top-0 sticky z-50 antialiased deneme"
      style={{
        background: "linear-gradient(180deg,#2ecc71,#1abc9c)",
        fontFamily: "Roboto,sans-serif",
      }}
    >
      {/* ${numberWithCommas(totalMoney)} */}$
      {
        <AnimatedNumber
          component="text"
          value={parseInt(totalMoney)}
          // style={{
          //   transition: "0.8s ease-out",
          // }}
          // frameStyle={(perc) => (perc === 100 ? {} : {})}
          duration={2000}
          formatValue={(n) => numberWithCommas(parseInt(n))}
        />
      }
    </div>
  );
}

export default TotalMoney;
