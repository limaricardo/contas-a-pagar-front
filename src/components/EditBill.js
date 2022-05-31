import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import EditIcon from "@mui/icons-material/Edit";
import EditBillForm from './EditBillForm'

const EditBill = ({ id }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="EditBill">
      <div className="btn">
        <Button className="edit-button"  onClick={() => setShowModal(true)}>
          <EditIcon />
        </Button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Button className="x-button" onClick={() => setShowModal(false)}>
          X
        </Button>
        <EditBillForm id={id} setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};

export default EditBill;
