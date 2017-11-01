import env from "./env";

export default function createItem(status, goalId, userId, token) {
    return fetch(
        `${env.MY_URL}/goal-assignments`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId,
                goalId,
                status
            })
        }
    )
        .then(response => response.json())
        .then(record => {
            return {
                id: record.id
            };
        });
}