export default function rootReducer(currentState = { items: [] }, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...currentState,
        items: action.items
      };
    case "UPDATE_ITEM":
      console.log(currentState, "<<<<<<< current state");
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
