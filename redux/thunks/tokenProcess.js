import token from "../../api/token";
import getUser from "../../api/getUser";
import {Actions} from "react-native-router-flux";

var jwtDecode = require('jwt-decode');


export default function tokenProcess(item) {
    let outerToken;
    let outerUserId;
    return (dispatch, getState) => {
        return token(item).then(response => {


            //TODO check for invalid response

            outerUserId = jwtDecode(response.token).sub;
            outerToken = response.token;


            return item
        })
            .then(item => {
                return getUser(outerToken, outerUserId)
                    // .then(response => response.json())
                    .then(userItem => {
                        console.log(outerUserId, 'OUTER USER ID <<<<<<<<<<<<<<<<')

                        dispatch({
                            type: "USER_LOGIN",
                            token: outerToken,
                            userId: outerUserId,
                            authenticatedUser: userItem

                        });
                        Actions.jump("list");
                        return userItem;
                    })
            }).then(finalUserItem => {
                return finalUserItem
            });
    }
}
