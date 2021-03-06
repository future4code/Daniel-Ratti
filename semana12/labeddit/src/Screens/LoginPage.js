import React, { useContext } from "react";
import axios from "axios";
import useForm from "../Hooks/UseForm";
import { BASE_URL } from "../Constants/BaseUrl";
import { goToFeedPage, goToSignUpPage } from "../Router/Coordinator";
import { useHistory } from "react-router-dom";
import useRequireLoggedOut from "../Hooks/useRequireLoggedOut";
import LoggedContext from "../Context/LoggedContext";
import styled from "styled-components"

const MainLoginDiv = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`

const ButtonSubmit = styled.button`
`

const LoginPage = () => {
  const { logged, setLogged } = useContext(LoggedContext);
  useRequireLoggedOut(logged, setLogged);

  const history = useHistory();
  const [form, onChange, resetForm] = useForm({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const login = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert(`Login realizado como ${response.data.user.username}`);
        setLogged(true);
        goToFeedPage(history);
      })
      .catch((error) => {
        alert("E-mail ou senha inválidos.");
        resetForm();
        console.log(error.message);
      });
  };

  return (
    <MainLoginDiv>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>E-mail: </label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleInput}
        />
        <label>Senha: </label>
        <input
          name="password"
          type="password"
          required
          value={form.password}
          onChange={handleInput}
        />
        <ButtonSubmit type="submit">Entrar</ButtonSubmit>
      </form>
      <button onClick={() => goToSignUpPage(history)}>
        Ainda não possui cadastro? Cadastre-se aqui!
      </button>
    </MainLoginDiv>
  );
};

export default LoginPage;
