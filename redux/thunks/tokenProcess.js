import token from "../../api/token";
import {Actions} from "react-native-router-flux";
var jwtDecode = require('jwt-decode');


export default function tokenProcess(item) {
    return (dispatch, getState) => {
        return token(item).then(response => {
            //TODO check for invalid response

            let userId = jwtDecode(response.token);

            console.log(userId)

            dispatch({
                type: "USER_LOGIN",
                token: response.token,
                userId: userId
            });
            Actions.jump("list");
            return item;
        });
    };
}
