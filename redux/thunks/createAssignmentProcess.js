import createAssignment from "../../api/createAssignment";
import getUser from "../../api/getUser";
import moment from "moment";
import {Actions} from "react-native-router-flux";

export default function createAssignmentProcess(attributes) {
    let outGoalId;
    let outUserId;
    let outAssignmentId;
    return (dispatch, getState) => {
        return createAssignment(attributes.status, attributes.goalId, attributes.username, getState().userToken)
            .then(response => {
                outGoalId = response.goalId;
                outUserId = response.userId;
                outAssignmentId = response.id;
                return getUser(getState().userToken, response.userId)
            })
            .then(userItem => {
                dispatch({
                    type: "CREATE_ASSIGNMENT",
                    goalId: outGoalId,
                    userId: outUserId,
                    id: outAssignmentId,
                    userItem
                });
                return userItem;
            });
    };
}
