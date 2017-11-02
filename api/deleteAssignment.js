import env from "./env";

export default function deleteAssignment(assignmentId, token) {

    return fetch(
        `${env.MY_URL}/goal-assignments/${assignmentId}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }
    )
        .then(response => response.json())
        .then(record => {
            return {
                id: record.id,
                goalId: record.goalId,
                userId: record.userId,
                status: record.status
            };
        });
}