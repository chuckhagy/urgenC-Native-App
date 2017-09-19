import getItems from "../../api/getItems";
import moment from "moment";

export default function getItemsProcess() {
  return (dispatch, getState) => {
    return getItems().then(items => {
      const timeItems = items;
      const currentTime = moment(Date.now());
      newItems = timeItems.map(item => {
        item.timeLeft = moment(item.duedate).diff(currentTime, "minutes");
        item.totalTime = moment(item.duedate).diff(item.createddate, "minutes");
        item.displayTime = moment(
          moment(item.duedate).diff(currentTime)
        ).format("DD:HH:MM:SS");
        item.rank =
          (1 - item.timeLeft / item.totalTime) * 0.6 + item.priority / 5 * 0.5;
        return item;
      });
      console.log(newItems);
      dispatch({
        type: "GET_ITEMS",
        items: newItems
      });
      return items;
    });
  };
}
