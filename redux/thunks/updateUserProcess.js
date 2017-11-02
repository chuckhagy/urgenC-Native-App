import updateUser from "../../api/updateUser";
import moment from "moment";
import {Actions} from "react-native-router-flux";

export default function updateItemProcess(attributes) {
    return (dispatch, getState) => {
        return updateUser(attributes, getState().userToken, getState().userId)
            .then(response => {
                dispatch({
                    type: "UPDATE_USER",
                    updatedUser: {
                        id: response.id,
                        displayName: response.displayName,
                        email: response.email,
                        role: response.role,
                        statusMessage: response.statusMessage,
                        username: response.username,
                        color: response.color,
                    }
                });
                Actions.jump("list");
                return response;
            });
    };
}
