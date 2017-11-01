import signup from "../../api/signup";
import {Actions} from "react-native-router-flux";

var jwtDecode = require('jwt-decode');


export default function signupProcess(item) {
    return (dispatch, getState) => {
        return signup(item).then(response => {


            return item
        })
            .then(item => {
                return getUser(outerToken, outerUserId)
                .then(response => response.json())
                    .then(userItem => {
                        Actions.pop();
                        return userItem;
                    })
            })
    }
}
