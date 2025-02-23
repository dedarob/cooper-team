import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Login.module.css";
import { FaRecycle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { loginFetch } from "./loginService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    loginFetch(data, navigate);
  };

  return (
    <>
      <Container>
        <section className={styles.login_page}>
          <form className={styles.login_box} onSubmit={handleSubmit(onSubmit)}>
            <FaRecycle className={styles.icon} />
            <label htmlFor="username">Usuário</label>
            <input
              {...register("username")}
              className={styles.text_input}
              type="text"
              placeholder="joaosilva"
              autoComplete="off"
            />
            <label htmlFor="password">Senha</label>
            <input
              {...register("funcionarioSenha")}
              id="password"
              className={styles.text_input}
              type="password"
              placeholder="digite sua senha"
              autoComplete="off"
            />
            <button className={styles.login_button}>Login</button>
          </form>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
