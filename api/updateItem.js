import env from "./env";
export default function updateItem(fullItem) {
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
          priority: fullItem.priority,
          status: fullItem.status,
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
        priority: record.fields.priority,
          duedate: record.fields.duedate,
          createddate: record.fields.createddate,
          status: record.fields.status,
      };
    });
  //.catch() <<<<< DO THIS
}
