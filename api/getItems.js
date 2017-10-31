import env from "./env";


export default function getItems(token) {
  return fetch(
    `${env.MY_URL}/goal-assignments/user/1`,
    {
      headers: {
        Authorization: `Bearer ${token}`
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
