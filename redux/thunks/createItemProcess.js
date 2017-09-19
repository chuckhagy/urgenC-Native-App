import createItem from "../../api/createItem";

export default function createItemProcess(item) {
  return (dispatch, getState) => {
    return createItem(item).then(newId => {
      newItem.id = newId.id;
      dispatch({
        type: "CREATE_ITEM",
        newItem: newItem
      });
      return newItem;
    });
  };
}
