import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ratti-epps/login";

  const history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      history.push("/");
    }
  }, [history]);

  const login = () => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(loginUrl, body)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const PaperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto",
  };

  const AvatarSytle = {
    backgroundColor: "#00AAF0",
  };

  const ButtonStyle = {
    border: "none",
    outline: "none",
  };

  return (
    <Grid>
      <Header />
      <Paper elevation={10} style={PaperStyle}>
        <Grid align="center">
          <Avatar style={AvatarSytle}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="E-mail"
          placeholder="Digite seu e-mail."
          value={email}
          onChange={handleEmail}
          fullWidth
          required
        />
        <TextField
          label="Senha"
          placeholder="Digite sua senha."
          type="password"
          value={password}
          onChange={handlePassword}
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Lembrar Usuario!"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={login}
          style={ButtonStyle}
          fullWidth
        >
          Logar
        </Button>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
