import React from "react";
import Body from "../../img/body.png";
import { Link } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import "../AuthorizationComponent/Authorization.scss"

const AuthorizationComponent = () => {
  return (
    <div className="container">
      <HeaderComponent title="Войти в систему" />
      <div className="section">
        <img src={Body} alt="" />
        <div className="element-entrance">
          <h1> Войти в систему </h1>
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
          <div className="click-element">
            <button>Войти</button>
            <Link to="/registration">
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
export default AuthorizationComponent