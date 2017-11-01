import env from "./env";

export default function updateAssignment(fullItem, token, userId) {
    return fetch(
        `${env.MY_URL}/users/${userId}`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                displayName: fullItem.displayName,
                email: fullItem.email,
                profileColor: fullItem.profileColor,
                statusMessage: fullItem.statusMessage
            })
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
                color: record.profileColor.trim(),
            };
        });
    //.catch() <<<<< DO THIS
}
