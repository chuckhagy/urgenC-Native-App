import env from "./env";

export default function updateAssignment(fullItem, token) {
    return fetch(
        `${env.MY_URL}/goal-assignments/${fullItem.assignmentId}`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    status: fullItem.status,
            })
        }
    )
        .then(response => response.json())
        .then(record => {
            return {
                status: record.status.trim()
            };
        });
    //.catch() <<<<< DO THIS
}
