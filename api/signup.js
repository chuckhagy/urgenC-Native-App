import env from "./env";

export default function token(newUser) {
    return fetch(
        `${env.MY_URL}/users`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: newUser.username,
                displayName: newUser.displayName,
                email: newUser.email,
                password: newUser.password
            })
        })
        .then(response => {
            return response
        })
 }