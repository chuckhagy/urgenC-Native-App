import updateItem from "../../api/updateItem";

export default function updateItemProcess(fullItem) {
  return (dispatch, getState) => {
    return updateItem(fullItem).then(item => {
      console.log(item, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< IN THUNK");
      dispatch({
        type: "UPDATE_ITEM",
        id: record.id,
        title: record.fields.title,
        body: record.fields.body,
        priority: record.fields.priority,
        duedate: record.fields.duedate
      });
      return items;
    });
  };
}
