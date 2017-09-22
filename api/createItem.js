import env from "./env";
export default function updateItem(fullItem) {
  return fetch(
    `https://api.airtable.com/v0/${env.AIRTABLE_DATABASE_ID}/items/`,
    {
      method: "POST",
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
          createddate: fullItem.createddate
        }
      })
    }
  )
    .then(response => response.json())
    .then(record => {
      return {
        id: record.id
      };
    });
  //.catch() <<<<< DO THIS
}
