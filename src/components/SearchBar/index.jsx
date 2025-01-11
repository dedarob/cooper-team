import { useState } from "react";
import { FaSearch, FaTruckLoading } from "react-icons/fa";
import axios from "axios";
import styles from "./SearchBar.module.css";

const apiPath = "/pessoafisica";

export function searchBarUseState() {
  const [resultFromSearchBar, setResultFromSearchBar] = useState([]);
  return [resultFromSearchBar, setResultFromSearchBar];
}

export function searchBarFetch(personName, setResultFromSearchBar) {
  axios
    .get(import.meta.env.VITE_BACKEND_KEY + apiPath, {
      params: {
        returnTypes: "idAndUsername",
        name: personName,
      },
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      },
    })
    .then((response) => {
      setResultFromSearchBar(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function SearchBar({ onSelectPerson }) {
  const [resultFromSearchBar, setResultFromSearchBar] = searchBarUseState();
  const [searchQuery, setSearchQuery] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchQuery) {
      setIsButtonDisabled(true);
      searchBarFetch(searchQuery, setResultFromSearchBar);

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 5000);
    } else {
      setResultFromSearchBar([]);
    }
  }

  function handleItemClick(personName) {
    onSelectPerson(personName);
  }

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className={styles.search}>
        <input
          type="text"
          className={styles.search_input}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Digite o nome"
        />
        <button
          type="submit"
          className={styles.search_button}
          disabled={isButtonDisabled}
        >
          <span
            className={`${styles.icon} ${
              isButtonDisabled ? styles.icon_loading : ""
            }`}
          >
            {isButtonDisabled ? <FaTruckLoading /> : <FaSearch />}
          </span>
        </button>
      </form>

      <ul className={styles.result_list}>
        {resultFromSearchBar.length > 0 ? (
          resultFromSearchBar.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item.pfNome)}
              className={styles.result_item}
            >
              <p>
                <strong>Nome:</strong> {item.pfNome}
              </p>
              <p>
                <strong>ID/Código:</strong> {item.id}
              </p>
            </li>
          ))
        ) : (
          <li>Nenhum resultado encontrado</li>
        )}
      </ul>
    </div>
  );
}

export default SearchBar;
