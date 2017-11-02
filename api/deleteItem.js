import env from "./env";
export default function updateItem(id, token) {
  return fetch(
      `${env.MY_URL}/goals/${id}`,
    {
      method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
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
