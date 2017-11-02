import createItem from "../../api/createItem";
import createAssignment from "../../api/createAssignment";
import {Actions} from "react-native-router-flux";
import moment from "moment";

export default function createItemProcess(item) {
    let outerNewId;
    return (dispatch, getState) => {
        return createItem(item, getState().userId, getState().userToken)
            .then(newId => {
                outerNewId = newId.id;
                return createAssignment('current', outerNewId, getState().userId, getState().userToken)
            })
            .then(newId => {
                let currentTime = moment.utc(Date.now());
                item.id = outerNewId;
                item.timeLeft = moment.utc(item.duedate).diff(currentTime, "minutes");
                item.totalTime = moment
                    .utc(item.duedate)
                    .diff(item.createddate, "minutes");
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
