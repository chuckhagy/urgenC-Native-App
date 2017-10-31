import env from "./env";

export default function token(fullItem) {
    return fetch(
        `${env.MY_URL}/token`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${env.MY_ADMIN_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: fullItem.username,
                password: fullItem.password
            })
        }
    )
        .then(response => {
            return response.json()

        })
        .then(record => {
            return {
                token: record.token
            };
        });
}