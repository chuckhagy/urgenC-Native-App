import createItem from "../../api/createItem";
import { Actions } from "react-native-router-flux";
import moment from "moment";

export default function createItemProcess(item) {
  return (dispatch, getState) => {
    return createItem(item).then(newId => {
      item.id = newId.id;
      let currentTime = moment(Date.now());
      item.timeLeft = moment(item.duedate).diff(currentTime, "minutes");
      item.totalTime = moment(item.duedate).diff(item.createddate, "minutes");
      item.rank =
        (1 - item.timeLeft / item.totalTime) * 0.6 + item.priority / 5 * 0.5;

      dispatch({
        type: "CREATE_ITEM",
        newItem: item
      });
      Actions.jump("list");
      return item;
    });
  };
}
