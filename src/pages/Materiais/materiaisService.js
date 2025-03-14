import axios from "axios";
const apiPath = "/material";

export function fetchMateriais(data, navigate) {
  axios
    .post(
      import.meta.env.VITE_BACKEND_KEY + apiPath,
      {
        nomeMaterial: data.nomeMaterial,
        descricao: data.descricao,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      }
    )

    .then((response) => {
      alert("Registro de material realizado com sucesso!");
      //navigate("/"); usa se quiser navegar pra alguma pg depois
    })

    .catch((error) => {
      console.log(error.message);
    });
}
