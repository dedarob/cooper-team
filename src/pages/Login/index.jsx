import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Login.module.css";
import { FaRecycle } from "react-icons/fa";
import { loginFetch } from "./loginService";

function LoginHandler({ username, password }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    loginFetch(username, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          console.log("Token:", data.token);
          navigate("/home");
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.log("Error while attempting login:", error);
      });
  };

  return (
    <button className={styles.login_button} onClick={handleLogin}>
      Login
    </button>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Container>
        <section className={styles.login_page}>
          <div className={styles.login_box}>
            <FaRecycle className={styles.icon} />
            <label htmlFor="username">Usuário</label>
            <input
              id="username"
              className={styles.text_input}
              type="text"
              placeholder="joaosilva"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              className={styles.text_input}
              type="password"
              placeholder="digite sua senha"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginHandler username={username} password={password} />
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
