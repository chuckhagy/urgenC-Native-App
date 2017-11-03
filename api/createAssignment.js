import env from "./env";

export default function createAssignment(status, goalId, username, token) {
    return fetch(
        `${env.MY_URL}/goal-assignments`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                goalId,
                status
            })
        }
    )
        .then(response => {
            return response.json()
        })
        .then(record => {
            return {
                id: record.id,
                goalId: record.goalId,
                userId: record.userId,
                status: record.status ? record.status.trim() : null
            };
        }).catch(error => {
            console.log(error)
            throw error
        })
}