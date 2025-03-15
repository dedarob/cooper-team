//Esse pedaço de código é inútil, já que eu posso usar a outra search bar para extrair somente o id da pessoa

import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import styles from "./ModularSearching.module.css";

function ModularSearching({
  apiPath,
  queryKey,
  placeholder,
  onSelect,
  closeSearch,
  searchType,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchQuery) {
      console.log(`Procurando por ${searchType} na API: ${apiPath}`); // Mostra qual API está sendo chamada
      setIsLoading(true);
      axios
        .get(import.meta.env.VITE_BACKEND_KEY + apiPath, {
          params: { [queryKey]: searchQuery },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        })
        .then((response) => {
          setResults(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados:", error);
          setIsLoading(false);
        });
    }
  }

  return (
    <div className={styles.searchBar}>
      <h3>Pesquisando por: {searchType}</h3>{" "}
      {/* Título informando o tipo de pesquisa */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={placeholder}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      <ul>
        {results.length > 0 ? (
          results.map((item, index) => (
            <li key={index} onClick={() => onSelect(item)}>
              {item.nome} {/* Altere conforme a estrutura dos dados */}
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
      <button onClick={closeSearch}>Close</button>
    </div>
  );
}

export default ModularSearching;
