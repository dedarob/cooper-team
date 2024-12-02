import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { FaRecycle } from "react-icons/fa";

function Login() {
  return (
    <>
      <Container>
        <section className={styles.login_page}>
          <div className={styles.login_box}>
            <FaRecycle className={styles.icon} />
            <label htmlFor="">Usuário</label>
            <input
              className={styles.text_input}
              type="text"
              placeholder="exemplo@nerdmail.com"
              autoComplete="off"
            />
            <label htmlFor="">Senha</label>
            <input
              className={styles.text_input}
              type="password"
              placeholder="digite sua senha"
              autoComplete="off"
            />
            <button className={styles.login_button}>Login</button>
            <Link className={styles.conta} to="/coletas">
              Não tem uma conta?
            </Link>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
