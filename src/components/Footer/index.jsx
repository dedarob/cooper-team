import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p> Cooperativa de Bocaiuva - 2025</p>
      <a href="https://github.com/dedarob">GitHub</a>
      <a href="https://www.linkedin.com/in/roberto-euclides-4b571b248/">
        LinkedIN
      </a>
    </footer>
  );
}

export default Footer;
