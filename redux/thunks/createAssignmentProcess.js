import createAssignment from "../../api/createAssignment";
import moment from "moment";
import {Actions} from "react-native-router-flux";

export default function createAssignmentProcess(item) {
    return (dispatch, getState) => {
        return createAssignment(item, getState().userToken)
            .then(response => {
                dispatch({
                    type: "CREATE_ASSIGNMENT",
                    newItem: {
                        id: response.id,
                        userId: response.userId,
                        goalId: response.goalId,
                        status: response.status
                    }
                });
                Actions.jump("list");
                return item;
            });
    };
}
