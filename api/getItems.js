export default function getItems(){
  console.log('FETCH<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
  return fetch("https://api.airtable.com/v0/appXOOiOxSZATJHhu/items", {
    headers:{
      Authorization: "Bearer keyguaiAIUYZl6jYN",
    }
  })
  .then(response => response.json())
  .then(data => data.records.map(record => ({
    id: record.id,
    title: record.fields.title,
    body: record.fields.body,
    success: record.fields.success,
    priority: record.fields.priority,
    duedate: record.fields.duedate,
    createddate: record.fields.createddate
  })))
  .catch(error => alert('System Error: Please Try Again Later'))
}