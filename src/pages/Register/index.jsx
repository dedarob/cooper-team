import React, { useState } from "react";
import { FaAt } from "react-icons/fa";
import SearchBar from "../../components/SearchBar";
import styles from "./Register.module.css";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [person, setPerson] = useState("");

  const handleSelectPerson = (personName) => {
    setPerson(personName);
  };

  return (
    <>
      <Container>
        <section className={styles.register_entire}>
          <div className={styles.register_search}>
            <h2>Procure pela pessoa</h2>
            <SearchBar onSelectPerson={handleSelectPerson} />
          </div>
          <div className={styles.register_page}>
            <form action="">
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
                  placeholder="JOAO SILVA"
                  autoComplete="off"
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                />
                <label htmlFor="person">Permissão</label>
                <select
                  defaultValue={"DEFAULT"}
                  name="LoremIpsum"
                  id=""
                  className={styles.select_box}
                >
                  <option value="DEFAULT" disabled>
                    Seleione uma opção
                  </option>
                  <option value="option1">Administrador</option>
                  <option value="option2">Operador</option>
                </select>
                <button className={styles.register_button}>Registrar</button>
              </div>
            </form>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
