const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        isLoading: false,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        isLoading: false,
      };
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
