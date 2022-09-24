import React from "react";
const Isincome = Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try Saying: <br />
      Add {Isincome ? "Income " : "Expense "}
      for $100 in
      {Isincome ? "Business " : "House "}
      Salary for Monday
    </div>
  );
};
export default InfoCard;
