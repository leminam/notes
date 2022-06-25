const defaultState = {
  notes: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_NOTES":
      return { ...state, notes: [...state.notes, ...action.payload] };
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "DELETE_NOTE":
      return {
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
