import getItems from "../../api/getItems";

export default function getItemsProcess() {
  return (dispatch, getState) => {
    return getItems().then(items => {
      items = items.sort(function(b, a) {
        return a.priority - b.priority;
      });
      dispatch({
        type: "GET_ITEMS",
        items: items
      });
      return items;
    });
  };
}
