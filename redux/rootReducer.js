import moment from "moment";

export default function rootReducer(currentState = { items: [] }, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...currentState,
        items: action.items
      };
    case "UPDATE_TIMES":
      const timeItems = currentState.items;
      const currentTime = moment(Date.now());
      timeItems = timeItems.map(item => {
        item.timeLeft = moment(item.duedate).diff(currentTime, "seconds");
      });
      return {
        ...currentState,
        items: timeItems
      };

    case "UPDATE_ITEM":
      const newItems = currentState.items.filter(
        each => each.id !== action.newItem.id
      );
      console.log(action.newItem, "New Item Here");
      newItems.push(action.newItem);
      newItems.sort(function(b, a) {
        return a.rank - b.rank;
      });
      return {
        ...currentState,
        items: [...newItems]
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
      console.log(lessItems);
      console.log(action.id);
      lessItems.items = currentState.items.filter(
        item => item.id !== action.id
      );
      console.log(lessItems);

      return {
        ...currentState,
        items: lessItems.items
      };

    default:
      return currentState;
  }
}
