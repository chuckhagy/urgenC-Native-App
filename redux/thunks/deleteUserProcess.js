import deleteUser from "../../api/deleteUser";
import {Actions} from "react-native-router-flux";

export default function deleteUserProcess(attributes) {
    return (dispatch, getState) => {
        return deleteUser(getState().userToken, getState().userId)
            .then(response => {
                dispatch({
                    type: "LOGOUT",
                });
                return response;
            });
    };
}
