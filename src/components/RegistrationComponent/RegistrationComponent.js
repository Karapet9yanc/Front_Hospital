import React from "react";
import Body from "../../img/body.png";
import { Link } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import "../RegistrationComponent/Registration.scss";

const RegistrationComponent = () => {
  return (
    <div className="container-reg">
      <HeaderComponent title="Зарегистрироваться в системе" />
      <div className="section-reg">
        <img src={Body} alt="" />
        <div className="element-reg">
          <h1> Регистрация </h1>
          <label>Login:</label>
          <input
            type="text"
            name="name"
            placeholder="Login"
          />
          <label>Password:</label>
          <input
            type="password"
            name="name"
            placeholder="Password"
          />
          <label>Repeat password:</label>
          <input
            type="password"
            name="name"
            placeholder="Password"
          />
          <div className="ckick-element-reg">
            <button>Зарегистрироваться</button>
            <Link to="/authorization">
              <p>Авторизироваться</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RegistrationComponent