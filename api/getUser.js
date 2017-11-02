import env from "./env";


export default function getItems(token, userId) {
    return fetch(
        `${env.MY_URL}/users/${userId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
        .then(response => response.json())
        .then(record => {
            return {
                id: record.id,
                displayName: record.displayName.trim(),
                email: record.email.trim(),
                role: record.role.trim(),
                statusMessage: record.statusMessage.trim(),
                username: record.username.trim(),
                color: record.profileColor,
            }
        });
}
