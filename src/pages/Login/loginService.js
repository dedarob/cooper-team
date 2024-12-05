import axios from "axios";
const apiPath = "/auth/login";

export function loginFetch(data, navigate) {
  axios
    .post(import.meta.env.VITE_BACKEND_KEY + apiPath, {
      username: data.username,
      funcionarioSenha: data.funcionarioSenha,
    })
    .then((response) => {
      navigate("/home");
    })

    .catch((error) => {
      console.log(error.message);
    });
}
