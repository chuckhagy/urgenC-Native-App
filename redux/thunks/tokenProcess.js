import token from "../../api/token";
import getUser from "../../api/getUser";
import {Actions} from "react-native-router-flux";
import {AsyncStorage} from "react-native";

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
                    .then(async (userItem) => {
                        try {
                            console.log('userID in thunk: ', outerUserId)
                            await AsyncStorage.setItem('@urgenCapp:token', outerToken);
                            await AsyncStorage.setItem('@urgenCapp:userId', outerUserId.toString());
                        } catch (error) {
                            console.log('Error saving data:', error)
                        }

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
