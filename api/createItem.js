import env from "./env";

export default function updateItem(fullItem) {
    return fetch(
        `${env.MY_URL}/goals`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${env.MY_ADMIN_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    title: fullItem.title,
                    body: fullItem.body,
                    dueDate: fullItem.duedate,
                    priority: fullItem.priority,
                    ownerUserId: 1 //TODO HARDCODED
            })
        }
    )
        .then(response => response.json())
        .then(record => {
            console.log(record)
            return {
                id: record.id
            };
        });
}