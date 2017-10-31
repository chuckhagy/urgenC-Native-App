import token from "../../api/token";
import {Actions} from "react-native-router-flux";
var jwtDecode = require('jwt-decode');


export default function tokenProcess(item) {
    return (dispatch, getState) => {
        return token(item).then(response => {
            //TODO check for invalid response

            dispatch({
                type: "USER_LOGIN",
                token: response.token,
                userId: jwtDecode(response.token)
            });
            Actions.jump("list");
            return item;
        });
    };
}
