import env from "./env";

export default function updateItem(fullItem, token) {
    return fetch(
        `${env.MY_URL}/goals/${fullItem.id}`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    title: fullItem.title,
                    body: fullItem.body,
                    dueDate: fullItem.duedate,
                    priority: fullItem.priority,
                    status: fullItem.status,
                    ownerUserId: fullItem.ownerUserId
            })
        }
    )
        .then(response => response.json())
        .then(record => {
            return {
                id: record.id,
                title: record.title.trim(),
                body: record.body.trim(),
                priority: record.priority,
                duedate: record.dueDate.trim(),
                createddate: record.created_at.trim(),
                status: record.ownerUserId
            };
        });
    //.catch() <<<<< DO THIS
}
