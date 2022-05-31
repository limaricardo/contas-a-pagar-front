import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import NewBillForm from "./NewBillForm";


const AddNewBill = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="AddNewBill">
      <div className="btn">
        <Button className="AddNewBill_btn" onClick={() => setShowModal(true)}>
          Criar nova conta a pagar
        </Button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Button className="x-button" onClick={() => setShowModal(false)}>X</Button>
        <NewBillForm setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};

export default AddNewBill;
