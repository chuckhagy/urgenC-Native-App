import env from "./env";
export default function updateItem(fullItem) {
  // console.log("UPDATING NOW...", fullItem);
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
          completed: fullItem.completed,
          success: fullItem.success,
          failure: fullItem.failure
        }
      })
    }
  )
    .then(response => response.json())
    .then(record => {
      // console.log("RECORD...", record);
      return {
        id: record.id,
        title: record.fields.title,
        body: record.fields.body,
        completed: record.fields.completed,
        success: record.fields.success,
        priority: record.fields.priority,
        duedate: record.fields.duedate,
        createddate: record.fields.createddate,
        completed: fullItem.completed,
        success: fullItem.success,
        failure: fullItem.failure
      };
    });
  //.catch() <<<<< DO THIS
}
