import getItems from "../../api/getItems";

export default function getItemsProcess() {
  return (dispatch, getState) => {
    return getItems().then(items => {
      dispatch({
        type: "GET_ITEMS",
        items: items
      });
      return items;
    });
  };
}
