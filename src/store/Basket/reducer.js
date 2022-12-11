function basketReducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_EVENT':
      return [...state, payload];

    case 'REMOVE_EVENT':
      return state.filter((a) => a.id !== payload);

    case 'UPDATE_BET_TYPE':
      return state.map((event) => (payload.id === event.id ? payload : event));

    default:
      return state;
  }
}

export default basketReducer;
