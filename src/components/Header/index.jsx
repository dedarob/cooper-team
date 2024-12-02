import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaHome, FaBook, FaRecycle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdGroupWork } from "react-icons/md";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/home">
        <span>Cooper</span>
      </Link>
      <nav>
        <Link to="/home" aria-label="Home">
          <FaHome />
        </Link>
        <Link to="/sobre">
          <FaBook />
        </Link>
        <Link to="/coletas">
          <FaRecycle />
        </Link>
        <Link to="/clientes">
          <FaPeopleGroup />
        </Link>
        <Link to="/materiais">
          <MdGroupWork />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
