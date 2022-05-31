import React from "react";
import Filter from "./Filter";
import '../stylesCSS/BillToPay.css'


const BillToPay = () => {
  return (
    <div className="BillToPay">
      <div className="container-filter-button">
        <Filter />
      </div>
    </div>
  );
};

export default BillToPay;
