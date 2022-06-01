import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "./Button";
import DeleteForm from "./DeleteForm";
import '../stylesCSS/EditDelete.css'

const DeleteBill = ({ id }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="btn">
        <Button className="delete-button" onClick={handleClickOpen}>
          <DeleteIcon />
        </Button>
      </div>
      <DeleteForm id={id} handleClose={handleClose} open={open} />
    </div>
  );
};

export default DeleteBill;
