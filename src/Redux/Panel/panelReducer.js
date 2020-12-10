const initialState = {
  hidden: true,
  pannelWidth: false,
  pannelFullWidth: false,
};

export const pannelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_PANNEL":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "PANNEL_RESIZE":
      return {
        ...state,
        pannelWidth: !state.pannelWidth,
      };
    case "PANNEL_FULL_WIDTH":
      return {
        ...state,
        pannelFullWidth: !state.pannelFullWidth,
      };
    default:
      return state;
  }
};
