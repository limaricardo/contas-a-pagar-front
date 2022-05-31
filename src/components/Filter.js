import React, {useState} from "react";
import Input from "./Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddNewBill from "./AddNewBill";

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="Filter">
      <Input placeholder="Fornecedor" />
      <DatePicker selected={startDate} value={startDate} onChange={(date) => setStartDate(date)} />
      <DatePicker selected={endDate} value={endDate} onChange={(date) => setEndDate(date)} />
      <AddNewBill />
    </div>
  );
};

export default Filter;
