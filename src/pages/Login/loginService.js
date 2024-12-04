export function loginFetch(username, password) {
    const apiPath = "/auth/login"
    return fetch(import.meta.env.VITE_BACKEND_KEY + apiPath, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            funcionarioSenha: password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json());
}

