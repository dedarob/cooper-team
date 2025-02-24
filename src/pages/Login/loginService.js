import axios from "axios";
const apiPath = "/auth/login";

export function loginFetch(data, navigate) {
  console.log(import.meta.env.VITE_BACKEND_KEY);
  axios
    .post(import.meta.env.VITE_BACKEND_KEY + apiPath, {
      username: data.username,
      funcionarioSenha: data.funcionarioSenha,
    })
    .then((response) => {
      //TODO: MUDAR TRÂNSITO DE TOKEN PARA MÊTODO MAIS SEGURO, ISSO AQUI NÃO PODE IR PARA PROD
      sessionStorage.setItem("authToken", response.data.token);
      navigate("/home");
    })

    .catch((error) => {
      console.log(error.message);
    });
}
