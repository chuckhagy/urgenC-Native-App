import env from "./env";

export default function updateItem(fullItem) {
    return fetch(
        `${env.MY_URL}/goals/${fullItem.id}`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${env.MY_ADMIN_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    title: fullItem.title,
                    body: fullItem.body,
                    dueDate: fullItem.duedate,
                    priority: fullItem.priority,
                    status: fullItem.status,
                    ownerUserId: 1 //HARDCODED
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
                status: 'current', //HARDCODED
            };
        });
    //.catch() <<<<< DO THIS
}
