import React, { useState } from "react";
import axios from "axios";
import "../HeaderInputComponent/HeaderInputComponent.scss";

const HeaderInputComponent = () => {

  const [value, setValue] = useState({
    name: "",
    doctor: "",
    date: new Date(),
    problem: ""
  })
  const { name, doctor, date, problem } = value

  const addValueToTable = async () => {
    await axios
      .post("http://localhost:8000/newProblems", {
        name,
        doctor,
        date,
        problem
      })
      .then((res) => {
        setValue("")
      })
  }

  return (
    <div className="div-input">
      <div className="header-input">
        <div className="div-elements">
          <p>Имя:</p>
          <input
            value={name || ""}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            type="text" />
        </div>
        <div className="div-elements">
          <p>Врачь:</p>
          <input
            value={doctor || ""}
            type="text"
            onChange={(e) => setValue({ ...value, doctor: e.target.value })} />
        </div>
        <div className="div-elements">
          <p>Дата:</p>
          <input
            value={date || ""}
            type="date"
            onChange={(e) => setValue({ ...value, date: e.target.value })}
          />
        </div>
        <div className="div-elements">
          <p>Жалобы:</p>
          <input
            value={problem || ""}
            type="text"
            onChange={(e) => setValue({ ...value, problem: e.target.value })} />
        </div>
        <div className="div-elements">
          <button onClick={() => addValueToTable()}>ДОБАВИТЬ</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderInputComponent