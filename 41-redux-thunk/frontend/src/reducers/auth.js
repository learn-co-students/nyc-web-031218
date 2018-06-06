const initialAuthState = {
  id: null,
  token: null
};

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case "TEST":
      console.log("Test auth reducer", action.payload);
      return state;
    case 'LOGIN':
      console.log('login', ...action.payload)
      return {...state, ...action.payload }
    default:
      return state;
  }
};

export default auth;
