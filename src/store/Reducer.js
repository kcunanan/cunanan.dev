const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADED':
      return {
        ...state,
        loaded: action.payload,
      };
    case 'SET_FETCHING':
      return {
        ...state,
        fetching: action.payload,
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_PATHNAME':
      return {
        ...state,
        pathname: action.payload,
      };
    case 'RESET':
      return action.payload;
    default:
      return state;
  }
};

export default Reducer;
