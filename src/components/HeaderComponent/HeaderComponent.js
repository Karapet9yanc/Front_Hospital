import React from "react";
import logo from "../../img/logotip.png";
import "../HeaderComponent/Header.scss"

const HeaderComponent = (props) => {
  const { title } = props;
  return (
    <div className="header">
      <div className="header-elements">
        <img src={logo} alt="" />
        <p>{title}</p>
      </div>
    </div>
  )
}
export default HeaderComponent