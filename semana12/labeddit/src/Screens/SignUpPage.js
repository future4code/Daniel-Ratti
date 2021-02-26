import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../Constants/BaseUrl";
import LoggedContext from "../Context/LoggedContext";
import useForm from "../Hooks/UseForm";
import useRequireLoggedOut from "../Hooks/useRequireLoggedOut";
import { goToFeedPage, goToLoginPage } from "../Router/Coordinator";

const SignUpPage = () => {
  const { logged, setLogged } = useContext(LoggedContext);
  useRequireLoggedOut(logged, setLogged);

  const history = useHistory();
  const [form, onChange, resetForm] = useForm({
    email: "",
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const signUp = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/signup`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert(
          `Cadastro realizado com sucesso! Seja bem-vindo(a), ${response.data.user.username}`
        );
        setLogged(true);
        goToFeedPage(history);
      })
      .catch((error) => {
        alert("E-mail ou nome de usuário já cadastrados.");
        resetForm();
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1>Cadastre-se!</h1>
      <form onSubmit={signUp}>
        <label>Nome de usuário: </label>
        <input
          name="username"
          type="text"
          required
          value={form.username}
          onChange={handleInput}
        />
        <br />

        <label>E-mail: </label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleInput}
        />
        <br />

        <label>Senha: </label>
        <input
          name="password"
          type="password"
          required
          value={form.password}
          onChange={handleInput}
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>

      <button onClick={() => goToLoginPage(history)}>Já possui um cadastro? Entre aqui!</button>
    </div>
  );
};

export default SignUpPage;
