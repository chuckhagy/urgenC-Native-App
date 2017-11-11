import env from "./env";


export default function getItems(token, userId) {
  return fetch(
    `${env.MY_URL}/users/${userId}/goal-assignments`,
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
             id: record.goalId,
             assignmentId: record.id,
             title: record.title.trim(),
             body: record.body.trim(),
             duedate: record.dueDate.trim(),
             priority: record.priority.toString(),
             createddate: record.created_at,
             status: record.status.trim(),
             ownerUserId: record.ownerUserId,
             userAssignments: record.userAssignments,
         }
      });
    });
}
