import updateItem from "../../api/updateItem";

export default function updateItemProcess(fullItem) {
  return (dispatch, getState) => {
    return updateItem(fullItem).then(item => {
      dispatch({
        type: "UPDATE_ITEM",
        newItem: {
          id: item.id,
          title: item.title,
          body: item.body,
          priority: item.priority,
          duedate: item.duedate
        }
      });
      return item;
    });
  };
}
