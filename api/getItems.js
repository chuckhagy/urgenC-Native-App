import env from "./env";
console.log(env);
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
    .then(data =>
      data.records.map(record => ({
        id: record.id,
        title: record.fields.title,
        body: record.fields.body,
        completed: record.fields.completed,
        success: record.fields.success,
        priority: record.fields.priority,
        duedate: record.fields.duedate,
        createddate: record.fields.createddate
      }))
    )
    .catch(error => alert("System Error: Please Try Again Later"));
}
