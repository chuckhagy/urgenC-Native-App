import env from "./env";

export default function getItems() {
  return fetch(
    `${env.MY_URL}/goals`,
    {
      headers: {
        Authorization: `Bearer ${env.MY_ADMIN_TOKEN}`
      }
    }
  )
    .then(response => response.json())
    .then(data => {
      return data.map(record => {
         return {
             id: record.id,
             title: record.title.trim(),
             body: record.body.trim(),
             duedate: record.dueDate.trim(),
             priority: record.priority.toString(),
             createddate: record.created_at,
             status: 'current' //HARDCODED
         }
      });
    });
}
