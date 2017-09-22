import getItems from "../../api/getItems";
import moment from "moment";

export default function getItemsProcess() {
  return (dispatch, getState) => {
    return getItems().then(items => {
      const timeItems = items;
      const currentTime = moment.utc(Date.now());
      newItems = timeItems.map(item => {
        item.timeLeft = moment.utc(item.duedate).diff(currentTime, "minutes");
        item.totalTime = moment
          .utc(item.duedate)
          .diff(item.createddate, "minutes");
        item.rank =
          (1 - item.timeLeft / item.totalTime) * 0.5 + item.priority / 5 * 0.5;
        return item;
      });
      dispatch({
        type: "GET_ITEMS",
        items: newItems
      });
      return items;
    });
  };
}
