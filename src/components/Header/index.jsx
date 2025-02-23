import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaHome, FaBook, FaRecycle, FaSignOutAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdGroupWork } from "react-icons/md";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/home">
        <span>Cooper Verde Brasil</span>
      </Link>
      <nav>
        <Link to="/home" aria-label="Home">
          <FaHome />
        </Link>
        <Link to="/sobre" aria-label="Sobre">
          <FaBook />
        </Link>
        <Link to="/coletas" aria-label="Coletas">
          <FaRecycle />
        </Link>
        <Link to="/clientes" aria-label="Clientes">
          <FaPeopleGroup />
        </Link>
        <Link to="/materiais" aria-label="Materiais">
          <MdGroupWork />
        </Link>
        <Link to="/Saida" aria-label="Sair">
          <FaSignOutAlt />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
