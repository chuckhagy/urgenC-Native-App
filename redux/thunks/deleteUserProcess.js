import deleteUser from "../../api/deleteUser";
import {Actions} from "react-native-router-flux";

export default function deleteUserProcess(attributes) {
    return (dispatch, getState) => {
        return deleteUser(getState().userToken, getState().userId)
            .then(response => {
                console.log(response, '<<< Response from server here in thunk')
                dispatch({
                    type: "LOGOUT",
                });
                return response;
            });
    };
}
