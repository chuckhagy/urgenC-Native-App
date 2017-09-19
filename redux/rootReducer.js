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
      console.log(timeItems, "<<<<<<<<<<<<<<<TIMEITEMS");
      return {
        ...currentState,
        items: timeItems
      };

    case "UPDATE_ITEM":
      const newItems = currentState.items.filter(
        each => each.id !== action.newItem.id
      );
      newItems.push(action.newItem);
      newItems.sort(function(b, a) {
        return a.priority - b.priority;
      });
      console.log(newItems, "AHhhhhhhhhhhhhhhhh");
      return {
        ...currentState,
        items: [...newItems]
      };

    default:
      return currentState;
  }
}
