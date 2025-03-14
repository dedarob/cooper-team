export function searchBarFetch(personName, setResultFromSearchBar) {
    axios
      .get(import.meta.env.VITE_BACKEND_KEY + apiPath, {
        params: {
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