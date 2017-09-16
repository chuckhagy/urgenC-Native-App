export default function rootReducer(
  currentState = {
    items: []
  },
  action
) {
  switch (action.type) {
    case "X":
      return {};

    default:
      return currentState;
  }
}
