import token from "../../api/token";
import getUser from "../../api/getUser";
import {Actions} from "react-native-router-flux";
import {AsyncStorage} from "react-native";

var jwtDecode = require('jwt-decode');


export default function autoLoginProcess(token, userId) {
    return (dispatch, getState) => {
        return getUser(token, userId)
            .then(async (userItem) => {
                dispatch({
                    type: "USER_LOGIN",
                    token: token,
                    userId: parseInt(userId),
                    authenticatedUser: userItem

                });
                Actions.jump("list");
                return userItem;
            }).then(finalUserItem => {
                return finalUserItem
            });
    }
}
