import React, { useState } from "react";
import axios from "axios";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { Link, useHistory } from "react-router-dom";
import { Snackbar } from "@mui/material";
import Body from "../../img/body.png";
import "../RegistrationComponent/Registration.scss";

const RegistrationComponent = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const { open, message } = snackbar;
  const history = useHistory("");

  const newUser = async () => {
    const validPassword = /^[A-Za-z0-9]{5,}\d{1,}$/;
    if (login.length > 5) {
      if (validPassword.test(password)) {
        if (repeatPassword === password) {
          try {
            await axios
              .post("http://localhost:8000/createUser", {
                login,
                password,
              })
              .then((res) => {
                localStorage.setItem("token", res.data.token);
                history.push("/main");
              });
          } catch { setSnackbar({ open: true, message: 'Пользователь с таким именем уже существует' }) };
        } else { setSnackbar({ open: true, message: 'Пароли не совпадают' }) };
      } else { setSnackbar({ open: true, message: 'Пароль не проходит валидацию' }) };
    } else { setSnackbar({ open: true, message: 'Данные введены не коректно, проверьте правильность написания' }) };
  }

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
            onChange={(e) => setLogin(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            name="name"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Repeat password:</label>
          <input
            type="password"
            name="name"
            placeholder="Password"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div className="ckick-element-reg">
            <button onClick={() => newUser()}>Зарегистрироваться</button>
            <Link to="/authorization">
              <p>Авторизироваться</p>
            </Link>
          </div>
        </div>
        <Snackbar
          onClose={() => setSnackbar({ open: false })}
          open={open}
          autoHideDuration={6000}
          message={message} />
      </div>
    </div>
  )
}

export default RegistrationComponent