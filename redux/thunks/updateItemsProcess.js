import updateItem from "../../api/updateItem";
import moment from "moment";
import { Actions } from "react-native-router-flux";

export default function updateItemProcess(fullItem) {
  return (dispatch, getState) => {
    return updateItem(fullItem).then(item => {
      let currentTime = moment(Date.now());
      timeLeft = moment(item.duedate).diff(currentTime, "minutes");
      totalTime = moment(item.duedate).diff(item.createddate, "minutes");
      rank =
        (1 - item.timeLeft / item.totalTime) * 0.6 + item.priority / 5 * 0.5;
      dispatch({
        type: "UPDATE_ITEM",
        newItem: {
          id: item.id,
          title: item.title,
          body: item.body,
          priority: item.priority,
          duedate: item.duedate,
          completed: item.completed,
          success: item.success,
          failure: item.failure,
          totalTime: totalTime,
          timeLeft: timeLeft,
          rank: rank
        }
      });
      Actions.jump("list");
      return item;
    });
  };
}
