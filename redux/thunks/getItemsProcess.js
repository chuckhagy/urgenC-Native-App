import getItems from "../../api/getItems";

export default function getItemsProcess() {
  return (dispatch, getState) => {
    return getItems().then(items => {
      console.log(items, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,,,");
      items = items.sort(function(b, a) {
        return new Date(a.date) - new Date(b.date);
      });
      dispatch({
        type: "GET_ITEMS",
        items: items
      });
      return items;
    });
  };
}
