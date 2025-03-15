import axios from "axios";
const apiPath = "/material";
export function fetchSomenteNomeMateriais() {
  return axios
    .get(import.meta.env.VITE_BACKEND_KEY + apiPath, {
      params: {
        returnTypes: "nomematerial",
      },
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}

//mandando os dados do submit pra BD

const coletaData = new Date().toISOString().split("T")[0];

export function fetchColetaEnviar(data, reset) {
  const coletaData = new Date().toISOString(); // Data e hora atuais, se necessário.

  axios
    .post(
      "/coleta",
      {
        materialId: data.material,
        clienteId: data.entregador,
        coletaData: coletaData, // Data atual da coleta
        quantidadeKg: data.quantidade,
        funcionarioId: data.funcionario,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      }
    )
    .then((response) => {
      console.log("Coleta adicionada com sucesso:", response.data);
      alert("Registro de coleta realizado com sucesso!");
      reset(); // Limpar o formulário após a submissão
    })
    .catch((error) => {
      console.error("Erro ao adicionar coleta:", error);
    });
}
