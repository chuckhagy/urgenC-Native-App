import env from "./env";
export default function getItems() {
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
      return data.records.map(record => {
         return {
             id: record.id,
             title: record.fields.title,
             body: record.fields.body,
             duedate: record.fields.duedate,
             priority: record.fields.priority,
             createddate: record.createdTime,
             status: record.fields.status
         }
      });
    });
}
