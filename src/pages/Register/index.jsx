import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Register.module.css";
import React, { useState } from "react";
import { FaAt } from "react-icons/fa";
import SearchBar from "../../components/SearchBar";

function RegisterHandler({ username, password }) {}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Container>
        <section className={styles.register_entire}>
          <div className={styles.register_search}>
            <h2>Procure pela pessoa</h2>
            <SearchBar />
          </div>
          <div className={styles.register_page}>
            <div className={styles.register_box}>
              <FaAt className={styles.icon} />
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
              <label htmlFor="person">Pessoa</label>
              <input
                id="person"
                className={styles.text_input}
                type="text"
                placeholder="Digite role da funcionário"
                autoComplete="off"
              />
              <button className={styles.register_button}>Registrar</button>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
