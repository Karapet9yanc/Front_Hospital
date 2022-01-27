import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Snackbar from "@mui/material/Snackbar";
import Body from "../../img/body.png";
import "../AuthorizationComponent/Authorization.scss";

const AuthorizationComponent = () => {
  const [login, setState] = useState("")
  const [password, setPassword] = useState("")
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const { open, message } = snackbar;
  const history = useHistory("");

  const Authorization = async () => {
    const validPassword = /^[A-Za-z0-9]{5,}\d{1,}$/;
    if (login.length > 5) {
      if (validPassword.test(password)) {
        try {
          await axios
            .post("http://localhost:8000/logIn", {
              login,
              password,
            })
            .then((res) => {
              localStorage.setItem("token", res.data);
              history.push("/main");
            });
        } catch { setSnackbar({ open: true, message: 'Неверный логин или пароль' }) }
      } else { setSnackbar({ open: true, message: 'Данные введены некоректно, проверьте поле пароль' }) }
    } else { setSnackbar({ open: true, message: 'Введите логин и пароль' }) }
  }


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
            value={login}
            name="name"
            placeholder="Login"
            onChange={(e) => setState(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            name="name"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="click-element">
            <button onClick={() => Authorization()}>Войти</button>
            <Link to="/registration">
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
      <Snackbar
        onClose={() => setSnackbar({ open: false })}
        open={open}
        autoHideDuration={6000}
        message={message} />
    </div>
  )
}

export default AuthorizationComponent