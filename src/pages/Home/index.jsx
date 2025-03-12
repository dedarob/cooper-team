import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.hero}>
          <div className={styles.content}>
            <h1>Juntos por um mundo mais sustentável</h1>
            <p>
              A Cooperativa de Reciclagem de Bocaiúva transforma resíduos em
              recursos, promovendo um futuro limpo para todos. Junte-se a nós e
              faça a diferença!
            </p>
            <Link to="/coletas" className={`${styles.ctaButton} ${styles.firstButton}`}>
              Comece Agora
            </Link>
          </div>
          <figure>
            <img
              className={styles.heroImage}
              src="public/Recoopedit.svg"
              alt="Reciclagem e sustentabilidade"
            />
          </figure>
        </section>
        <div className={styles.professionalCallToAction}>
  <div className={styles.textContent}>
    <h2>Junte-se ao nosso time!</h2>
    <p>
      Faça parte de um projeto que transforma ideias em impacto real. Contribua para um futuro sustentável e cresça conosco.
    </p>
  </div>
</div>

<section className={styles.features}>
          <div className={styles.featureCard}>
            <img src="public/reciclagem.svg" alt="Ícone Eco" />
            <h2>Sustentabilidade</h2>
            <p>
              Trabalhamos para reduzir o impacto ambiental por meio da reciclagem e conscientização.
            </p>
          </div>
          <div className={styles.featureCard}>
            <img src="public/icone-inclusao.svg" alt="Ícone Comunidade" />
            <h2>Comunidade</h2>
            <p>
              Conectamos pessoas em prol de um futuro mais limpo e saudável.
            </p>
          </div>
          <div className={styles.featureCard}>
            <img src="public/Recycle free icons designed by Freepik.svg" alt="Ícone Reciclagem" />
            <h2>Transformação</h2>
            <p>
              Transformamos resíduos em recursos valiosos para a sociedade.
            </p>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
