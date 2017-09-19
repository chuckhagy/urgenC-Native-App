import env from "./env";
export default function getItems() {
  console.log("FETCHING NOW...");
  return fetch(
    `https://api.airtable.com/v0/${env.AIRTABLE_DATABASE_ID}/items`,
    {
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_TOKEN}`
      }
    }
  )
    .then(response => response.json())
    .then(data => {
      console.log(data, "<<<<<<<<<<<<<<<<<<<<<");
      return data.records.map(record => ({
        id: record.id,
        title: record.fields.title,
        body: record.fields.body,
        completed: record.fields.completed,
        success: record.fields.success,
        priority: record.fields.priority,
        duedate: record.fields.duedate,
        createddate: record.createdTime
      }));
    });
  //.catch() <<<<< DO THIS
}
