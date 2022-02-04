import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import TableComponent from "../TableComponent/TableComponent";
import HeaderInputComponent from "../HeaderInputComponent/HeaderInputComponent";
import "../MainComponent/MainComponent.scss";

const MainComponent = () => {
  const [problems, setProblem] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/allProblems", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProblem(res.data.data);
      });
  }, []);

  return (
    <div>
      <HeaderComponent title="Приёмы">
        <Link className="exit-click" to='/authorization'><button className="Exit" >ВЫХОД</button></Link>
      </HeaderComponent>
      <HeaderInputComponent problems={problems} setProblem={setProblem} />
      <TableComponent problems={problems} setProblem={setProblem} />
    </div>
  );
};

export default MainComponent;