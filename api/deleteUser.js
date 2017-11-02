import env from "./env";

export default function updateAssignment(token, userId) {
    return fetch(
        `${env.MY_URL}/users/${userId}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }
    )
        .then(response => response.json())
    //.catch() <<<<< DO THIS
}
