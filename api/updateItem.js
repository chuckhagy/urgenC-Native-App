import env from "./env";
export default function updateItem(fullItem) {
  console.log("UPDATING NOW...");
  return fetch(
    `https://api.airtable.com/v0/${env.AIRTABLE_DATABASE_ID}/items/${fullItem.id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fields: {
          title: fullItem.title,
          body: fullItem.body,
          duedate: fullItem.duedate,
          priority: fullItem.priority
        }
      })
    }
  )
    .then(response => response.json())
    .then(record => {
      return {
        id: record.id,
        title: record.fields.title,
        body: record.fields.body,
        completed: record.fields.completed,
        success: record.fields.success,
        priority: record.fields.priority,
        duedate: record.fields.duedate,
        createddate: record.fields.createddate
      };
    });
  //.catch() <<<<< DO THIS
}
