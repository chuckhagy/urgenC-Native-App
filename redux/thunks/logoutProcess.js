import {Actions} from "react-native-router-flux";
import {AsyncStorage} from "react-native";

var jwtDecode = require('jwt-decode');

export default function logoutProcess() {
    return (dispatch, getState) => {

        return AsyncStorage.removeItem('@urgenCapp:token')
            .then(item => {
                AsyncStorage.removeItem('@urgenCapp:userId')
                    .then(item => {
                        dispatch({type: "LOGOUT",});
                        return item
                    }).catch((error) => {
                    console.log('Error clearing data data:', error)
                })
                return item
            })
            .catch((error) => {
                console.log('Error clearing data data:', error)
            })
    }
}