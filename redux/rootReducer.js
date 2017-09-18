export default function rootReducer(currentState = { items: [] }, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        items: action.items
      };
    case "UPDATE_ITEM":
      console.log(currentState, "<<<<<<< current state");
      return {
        ...currentState,
        items: action.items
      };

    default:
      return currentState;
  }
}
