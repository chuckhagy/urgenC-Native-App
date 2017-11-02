import updateAssignment from "../../api/updateAssignment";
import moment from "moment";
import {Actions} from "react-native-router-flux";

export default function updateItemProcess(item) {
    return (dispatch, getState) => {
        return updateAssignment(item, getState().userToken)
            .then(response => {
                let currentTime = moment.utc(Date.now());
                timeLeft = moment.utc(item.duedate).diff(currentTime, "minutes");
                totalTime = moment.utc(item.duedate).diff(item.createddate, "minutes");
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
                        status: response.status,
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
