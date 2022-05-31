import React, { Fragment } from "react";
import BillToPay from "./BillToPay";
import Navbar from "./Navbar";
import BillTable from "./BillTable";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <Fragment>
      <Navbar />
      <BillToPay />
      <BillTable />
      <ToastContainer autoClose={4000} />
    </Fragment>
  );
};

export default App;
