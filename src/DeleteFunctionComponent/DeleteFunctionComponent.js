import React from "react";
import axios from "axios";
import { Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from "@mui/material";


const DeleteFunctionComponent = ({ setProblem, visitId, closeModal }) => {

  const DeleteFunction = () => {
    axios.delete(`http://localhost:8000/deleteProblems?_id=${visitId}`)
      .then((res) => {
        closeModal();
        setProblem(res.data.data);
      });
  };

  return (
    <div className="delete-div">
      <Dialog
        open={true}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title"> Удалить прием </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы действительно хотите удалить прием ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={() => closeModal()}>Cancel</button>
          <button onClick={() => DeleteFunction()}>Delete</button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteFunctionComponent;