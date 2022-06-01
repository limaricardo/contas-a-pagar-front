import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";
import lucroRural from "../api/lucroRural";

export default function DeleteForm({ handleClose, open, id }) {

  const onHandleSubmit = (e) => {

    e.preventDefault();
    const data = { 
      id: id,
    }

    lucroRural
      .post("/contas-a-pagar-delete", {
        data,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Conta a pagar deletada com sucesso!", {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            handleClose();
          }, 1000);
          setTimeout(() => {
            window.location.reload();
          }, 2000)
          
        }
      })
      .catch((error) => {
        toast.error(
          "Você não pode deletar uma conta com uma Nota Fiscal vinculada",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
  };

  return (
    <div>
      <form action="/contas-a-pagar-delete" onSubmit={onHandleSubmit}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirmação para deletar conta a pagar"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Tem certeza que deseja excluir essa conta a pagar?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Não</Button>
            <Button onClick={onHandleSubmit} autoFocus>
              Sim, desejo excluir!
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
