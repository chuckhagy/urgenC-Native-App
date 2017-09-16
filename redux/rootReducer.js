export default function rootReducer(
  currentState = {
    items: []
  },
  action
) {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        items: action.items
      };

    default:
      return currentState;
  }
}
