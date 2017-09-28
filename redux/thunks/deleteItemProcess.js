import deleteItem from "../../api/deleteItem";
import { Actions } from "react-native-router-flux";

export default function deleteItemProcess(id) {
  return (dispatch, getState) => {
    return deleteItem(id).then(response => {
      dispatch({
        type: "DELETE_ITEM",
        id: id
      });
      Actions.pop();
      return response;
    });
  };
}
