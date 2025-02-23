import axios from "axios";
const apiPath = "/pessoafisica";

export function pfRegisterFetch(data, navigate) {
  axios
    .post(
      import.meta.env.VITE_BACKEND_KEY + apiPath,
      {
        pfNome: data.pfNome,
        cpf: data.cpf,
        identidade: data.identidade,
        email: data.email,
        telefone: data.telefone,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      }
    )

    .then((response) => {
      alert("Registro realizado com sucesso!");
      //navigate("/"); usa se quiser navegar pra alguma pg depois
    })

    .catch((error) => {
      console.log(error.message);
    });
}
