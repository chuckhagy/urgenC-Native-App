import moment from "moment";

export default function rootReducer(currentState = { items: [] }, action) {
  switch (action.type) {
    case "GET_ITEMS":
      let thisTest = action.items.filter(
        item =>
          moment(Date.now()).isSameOrAfter(moment(item.duedate)) &&
          !item.success &&
          !item.failure
      );
      console.log(thisTest, "<<<<<<<<<<<<<<<< this Test");
      return {
        ...currentState,
        items: action.items,
        modalOn: thisTest.length > 0
      };

    case "UPDATE_ITEM":
      const newItems = currentState.items.filter(
        each => each.id !== action.newItem.id
      );
      newItems.push(action.newItem);
      newItems.sort(function(b, a) {
        return a.rank - b.rank;
      });
      let test = newItems.filter(
        item =>
          moment(Date.now()).isSameOrAfter(moment(item.duedate)) &&
          !item.success &&
          !item.failure
      );
      return {
        ...currentState,
        items: [...newItems],
        modalOn: test.length > 0
      };

    case "CREATE_ITEM":
      const moreItems = currentState;
      moreItems.items.push(action.newItem);
      return {
        ...currentState,
        items: moreItems.items
      };

    case "DELETE_ITEM":
      const lessItems = currentState;
      lessItems.items = currentState.items.filter(
        item => item.id !== action.id
      );

      return {
        ...currentState,
        items: lessItems.items
      };

    case "EXPIRED_ITEM":
      const freshItems = currentState;
      freshItems.items.find(item => item.id === action.id).completed = true;

      return {
        ...currentState,
        modalOn: true,
        items: freshItems.items
      };

    default:
      return currentState;
  }
}
