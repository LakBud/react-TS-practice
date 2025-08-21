// type State = { key: Type } → define reducer state shape
// type Action = { type: "Action1" } | { type: "Action2" } → union of action types
// reducer: (state: State, action: Action) => State → typed reducer function
// TS ensures correct state updates & action handling

type State = { count: number };
type Action = { type: "Increment" } | { type: "Decrement" };

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };

    case "Decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export default counterReducer;
