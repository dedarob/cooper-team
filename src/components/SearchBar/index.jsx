import React, { useState, useEffect, useRef } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);

  const fetchSuggestions = (input) => {
    const mockSuggestions = [
      `${input} example`,
      `${input} tutorial`,
      `${input} documentation`,
      `how to use ${input}`,
      `${input} best practices`,
    ];
    setSuggestions(mockSuggestions);
  };

  useEffect(() => {
    if (query.length > 0) {
      fetchSuggestions(query);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className={styles.search_container} ref={searchContainerRef}>
      <input
        type="text"
        className={styles.search_input}
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {showSuggestions && (
        <ul className={styles.suggestions_container}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={styles.suggestion_item}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
