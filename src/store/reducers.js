const defaultState = {
  notes: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {...state, notes: [...state.notes, action.payload]};
    case "REMOVE_NOTE":
      return {
        notes: state.notes.filter((note, index) => index != action.id),
      };

    default:
      return state;
  }
};

export default reducer;