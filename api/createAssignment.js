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
        .then(response => response.json())
        .then(record => {
            console.log(record, '<<< RECORD')
            return {
                id: record.id,
                goalId: record.goalId,
                userId: record.userId,
                status: record.status
            };
        });
}