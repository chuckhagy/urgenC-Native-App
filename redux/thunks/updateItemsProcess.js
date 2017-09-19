import updateItem from "../../api/updateItem";
import moment from "moment";
import { Actions } from "react-native-router-flux";

export default function updateItemProcess(fullItem) {
  return (dispatch, getState) => {
    return updateItem(fullItem).then(item => {
      console.log(item, "<<<<<<<<< ITEM1");
      let currentTime = moment(Date.now());
      timeLeft = moment(item.duedate).diff(currentTime, "minutes");
      totalTime = moment(item.duedate).diff(item.createddate, "minutes");
      displayTime = moment(moment(item.duedate).diff(currentTime)).format(
        "DD:HH:MM:SS"
      );
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
          displayTime: displayTime,
          totalTime: totalTime,
          timeLeft: timeLeft,
          rank: rank
        }
      });
      console.log(item, "<<<<<<<<< ITEM2");
      Actions.jump("list");
      return item;
    });
  };
}
