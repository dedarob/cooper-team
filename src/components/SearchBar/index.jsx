import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const apiPath = "/pessoafisica";

function searchBarFetch(personName) {
  axios
    .get(import.meta.env.VITE_BACKEND_KEY + apiPath, {
      params: {
        returnTypes: "idAndUsername",
        name: personName,
      },
      headers: {
        //TODO: MUDAR TRÂNSITO DE TOKEN PARA MÊTODO MAIS SEGURO, ISSO AQUI NÃO PODE IR PARA PROD
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      },
    })
    .then((response) => {
      console.log("Data:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

//TODO: ADICIONAR COOLDOWN OU CACHE PARA PESQUISA, EVITAR REQUESTS DESNECESSÁRIOS
function searchPerson() {
  event.preventDefault();
  const personName = document.querySelector(`.${styles.search_input}`).value;
  searchBarFetch(personName);
}

function SearchBar() {
  return (
    <>
      <form onSubmit={searchPerson} className={styles.search}>
        <input type="text" className={styles.search_input} />
        <button type="submit" className={styles.search_button}>
          <FaSearch />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
