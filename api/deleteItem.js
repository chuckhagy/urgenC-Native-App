import env from "./env";
export default function updateItem(id) {
  return fetch(
    `https://api.airtable.com/v0/${env.AIRTABLE_DATABASE_ID}/items/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_TOKEN}`,
        "Content-Type": "application/json"
      }
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
