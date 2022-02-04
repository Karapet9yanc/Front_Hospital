import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { TextField } from "@mui/material";
import "../HeaderInputComponent/HeaderInputComponent.scss";

const HeaderInputComponent = ({ problems, setProblem }) => {
  const toDay = moment(new Date()).format("DD.MM.YYYY");
  const [value, setValue] = useState({
    name: "",
    doctor: "",
    date: toDay,
    problem: ""
  });
  const { name, doctor, date, problem } = value;
  const addValueToTable = async () => {
    await axios
      .post("http://localhost:8000/newProblems", {
        name,
        doctor,
        date,
        problem
      })
      .then((res) => {
        problems.push(res.data.data);
        setProblem([...problems])
        setValue({
          name: "",
          doctor: "",
          date: toDay,
          problem: "",
        });
      });
  };

  return (
    <div className="div-input">
      <div className="header-input">
        <div className="div-elements">
          <p>Имя:</p>
          <TextField
            className="input"
            value={name || ""}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            type="text" />
        </div>
        <div className="div-elements">
          <p>Врач:</p>
          <TextField
            className="input"
            id="outlined-basic"
            value={doctor || ""}
            type="text"
            onChange={(e) => setValue({ ...value, doctor: e.target.value })} />
        </div>
        <div className="div-elements">
          <p>Дата:</p>
          <TextField
            className="input"
            value={date}
            type="date"
            onChange={(e) => setValue({ ...value, date: e.target.value })} />
        </div>
        <div className="div-elements">
          <p>Жалобы:</p>
          <TextField
            className="input"
            value={problem || ""}
            type="text"
            onChange={(e) => setValue({ ...value, problem: e.target.value })} />
        </div>
        <div className="div-elements">
          <button onClick={() => addValueToTable()}>ДОБАВИТЬ</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderInputComponent;