import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authUser, createUser } from "../../../redux/reducerAuthorization";
import { TextField } from "@mui/material";

import "./Authorization.css";

// Страница авторизации
const Authorization = () => {
  const [Switch, setSwitch] = useState("form-box");
  const [bodyClass, setBodyClass] = useState("body");

  const Active = () => {
    setSwitch("form-box active");
    setBodyClass("body active");
  };

  const notActive = () => {
    setSwitch("form-box");
    setBodyClass("body");
  };

  const dispatch = useDispatch();

  const check = useSelector((state) => state.authorizatonReducer.check);
  const signingUp = useSelector((state) => state.authorizatonReducer.signingUp);
  const err = useSelector((state) => state.authorizatonReducer.error);
  const token = useSelector((state) => state.authorizatonReducer.token);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [authLogin, setAuthLogin] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [NotEmail, setNotEmail] = useState("");
  const [NotAuthEmail, setNotAuthEmail] = useState("");
  const [blurLogin, setBlurLogin] = useState(true);
  const [blurPassword, setBlurPassword] = useState(true);
  const [authBlurLogin, setAuthBlurLogin] = useState(true);
  const [authBlurPassword, setAuthBlurPassword] = useState(true);
  const [authBlurFirstName, setAuthBlurFirstName] = useState(true);
  const [authBlurLastName, setAuthBlurLastName] = useState(true);

  const handleBlurPassword = () => {
    password === "" ? setBlurPassword(false) : setBlurPassword(true);
  };

  const handleBlurLastName = () => {
    lastName === "" ? setAuthBlurLastName(false) : setAuthBlurLastName(true);
  };

  const handleBlurFirstName = () => {
    firstName === "" ? setAuthBlurFirstName(false) : setAuthBlurFirstName(true);
  };

  const handleBlurLogin = () => {
    login === "" ? setBlurLogin(false) : setBlurLogin(true);
  };

  const handleBlurAutLogin = () => {
    authLogin === "" ? setAuthBlurLogin(false) : setAuthBlurLogin(true);
  };

  const handleBlurAutPassword = () => {
    authPassword === ""
      ? setAuthBlurPassword(false)
      : setAuthBlurPassword(true);
  };

  const handleAuthLogin = (e) => {
    setAuthLogin(e.target.value);
    const valid =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!valid.test(String(e.target.value).toLowerCase())) {
      setNotAuthEmail("Некоректный емаил");
    } else {
      setNotAuthEmail("");
    }
  };

  const handleAuthPassword = (e) => {
    setAuthPassword(e.target.value);
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    const valid =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!valid.test(String(e.target.value).toLowerCase())) {
      setNotEmail("Некоректный емаил");
    } else {
      setNotEmail("");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChengeFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleChengeLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleSubmitAuth = (e) => {
    dispatch(authUser(authLogin, authPassword));
  };

  const handleSubmit = (e) => {
    dispatch(createUser(login, password, firstName, lastName));
    setLogin("");
    setPassword("");
    setFirstname("");
    setLastname("");
    if (check) {
      setSwitch("form-box");
      setBodyClass("body");
    }
  };

  const navigate = useNavigate();

  if(token) {
    navigate('/');
  }

  return (
    <div className={bodyClass}>
      <acticle className="container">
        <div className="block">
          <section className="block__item block-item">
            <h2 className="block-item__title">У вас уже есть аккаунт?</h2>
            <button className="block-item__btn signin-btn" onClick={notActive}>
              Войти
            </button>
          </section>
          <section className="block__item block-item">
            <h2 className="block-item__title">У вас нет аккаунта?</h2>
            <button className="block-item__btn signup-btn" onClick={Active}>
              Зарегистрироваться
            </button>
          </section>
        </div>
        <div className={Switch}>
          <div className="form form_signin">
            <h3 className="form__title">Вход</h3>
            <p>
            <h3 className="error">{err}</h3>
              {!NotAuthEmail ? (
                <h3 className="error">{err}</h3>
              ) : (
                <h3 className="error">{NotAuthEmail}</h3>
              )}
              <TextField
                className="form__input"
                onBlur={handleBlurAutLogin}
                label={!authBlurLogin ? "Поле пустое!" : "Email"}
                placeholder="login"
                value={authLogin}
                onChange={handleAuthLogin}
                type="text"
              ></TextField>
            </p>
            <p>
              <TextField
                className="form__input"
                placeholder="Password"
                onBlur={handleBlurAutPassword}
                label={!authBlurPassword ? "Поле пустое!" : "Password"}
                value={authPassword}
                onChange={handleAuthPassword}
                type="password"
              ></TextField>
            </p>
            <p>

                    <button onClick={() => handleSubmitAuth()} className="form__btn">
                      Войти
                    </button>

            </p>
          </div>

          <div className="form form_signup">
            <h3 className="form__title">Регистрация</h3>
            {!NotEmail ? (
              <h3 className="error">{err}</h3>
            ) : (
              <h3 className="error">{NotEmail}</h3>
            )}
            <p>
              <TextField
                className="form__input"
                placeholder="Email"
                onBlur={handleBlurLogin}
                label={!blurLogin ? "Поле пустое!" : "Email"}
                value={login}
                onChange={handleChangeLogin}
                type="email"
              ></TextField>
            </p>
            <p>
              <TextField
                className="form__input"
                onBlur={handleBlurPassword}
                label={!blurPassword ? "Поле пустое!" : "Password"}
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
                type="password"
              ></TextField>
            </p>
            <p>
              <TextField
                className="form__input"
                onBlur={handleBlurFirstName}
                label={!authBlurFirstName ? "Поле пустое!" : "Имя"}
                placeholder="Firstname"
                value={firstName}
                onChange={handleChengeFirstname}
                type="text"
              ></TextField>
            </p>{" "}
            <p>
              <TextField
                onBlur={handleBlurLastName}
                label={!authBlurLastName ? "Поле пустое!" : "Фамилия"}
                className="form__input"
                placeholder="Lastname"
                value={lastName}
                onChange={handleChengeLastname}
                type="text"
              ></TextField>
            </p>
            <p>
              <button
                disabled={
                  !login ||
                  !password ||
                  !lastName ||
                  !firstName ||
                  signingUp ||
                  NotEmail
                }
                onClick={handleSubmit}
                className="form__btn form__btn_signup"
              >
                Зарегистрироваться
              </button>
            </p>
          </div>
        </div>
      </acticle>
    </div>
  );
};

export default Authorization;
