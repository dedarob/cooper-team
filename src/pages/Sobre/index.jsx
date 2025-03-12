import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Sobre.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
function Sobre() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.sobre_section}>
          <h3 className={styles.texto_sobre}>
<<<<<<< HEAD
            Conheça mais sobre os criadores do site:
          </h3>
          <div className={styles.icons}>
            <a
              href="https://github.com/dedarob/cooper-team"
=======
            Conheça mais sobre o criador do site:
          </h3>
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/in/roberto-euclides-4b571b248/"
              target="_blank"
              rel="noopener norefereer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
            <a
              href="https://github.com/dedarob"
>>>>>>> 6bf3992774e1a6fda286f68ed8fe64a3bf41e9ce
              target="_blank"
              rel="noopener norefereer"
            >
              <FaGithub className={styles.icon} />
            </a>
<<<<<<< HEAD
=======
            <a
              href="mailto:robertoeuclides.pr@gmail.com"
              target="_blank"
              rel="noopener norefereer"
            >
              <FaEnvelope className={styles.icon} />
            </a>
>>>>>>> 6bf3992774e1a6fda286f68ed8fe64a3bf41e9ce
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Sobre;
