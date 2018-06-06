const initialBoardGameState = {
  games: [],
  genres: [],
};

const boardgames = (state = initialBoardGameState, action) => {
  switch (action.type) {
    case "TEST":
      console.log("Test auth reducer", action.payload);
      return state;
    default:
      return state;
  }
};

export default boardgames;
