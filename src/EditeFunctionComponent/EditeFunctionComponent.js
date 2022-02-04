import React, { useState } from "react";
import axios from "axios";
import { TextField, Dialog, DialogTitle, DialogContent } from "@mui/material";

const EditeFunctionComponent = ({ visit, setProblem, closeModal }) => {

  const { _id, name, doctor, date, problem } = visit;
  const [edite, setEdite] = useState({
    editeName: name,
    editeDoctor: doctor,
    editeDate: date,
    editeProblem: problem
  })

  const EditeFunction = async () => {
    await
      axios.patch("http://localhost:8000/updateProblems", {
        _id,
        name: editeName,
        doctor: editeDoctor,
        date: editeDate,
        problem: editeProblem,
      }, {
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then((res) => {
          closeModal()
          setProblem(res.data.data);
        });
  };
  const { editeName, editeDoctor, editeDate, editeProblem } = edite

  return (
    <div className="delete-div">
      <Dialog
        open={true}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Изменить прием</DialogTitle>
        <DialogContent className="edit-modal-content">
          <p>Имя:</p>
          <TextField
            className="input"
            value={editeName || ""}
            onChange={(e) => setEdite({ ...edite, editeName: e.target.value })}
            type="text" />
          <div className="div-elements">
            <p>Врач:</p>
            <TextField
              className="input"
              id="outlined-basic"
              value={editeDoctor || ""}
              type="text"
              onChange={(e) => setEdite({ ...edite, editeDoctor: e.target.value })} />
          </div>
          <div className="div-elements">
            <p>Дата:</p>
            <TextField
              className="input"
              value={editeDate || ""}
              type="date"
              onChange={(e) => setEdite({ ...edite, editeDate: e.target.value })} />
          </div>
          <div className="div-elements">
            <p>Жалобы:</p>
            <TextField
              className="input"
              value={editeProblem || ""}
              type="text"
              onChange={(e) => setEdite({ ...edite, editeProblem: e.target.value })} />
          </div>
        </DialogContent>
        <button onClick={() => EditeFunction()}>edit</button>
        <button onClick={() => closeModal()}>close</button>
      </Dialog>
    </div>
  );
};

export default EditeFunctionComponent