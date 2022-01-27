import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import TableComponent from "../TableComponent/TableComponent";
import HeaderInputComponent from "../HeaderInputComponent/HeaderInputComponent";
import "../MainComponent/MainComponent.scss";

const MainComponent = () => {
  return(
    <div>
      <HeaderComponent title="Приёмы">
        <Link className="exit-click" to='/authorization'><button className="Exit" >ВЫХОД</button></Link>
      </HeaderComponent>
      <HeaderInputComponent />
      <TableComponent/>
    </div>    
  )
}

export default MainComponent