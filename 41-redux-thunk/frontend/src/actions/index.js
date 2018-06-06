export const test = () => ({
  type: 'TEST',
  payload: {
    msg: 'I am a test'
  }
})

// export const login = (json) => {
//   return {
//     type: 'TEST',
//     payload: json
//   }
// }

const API = 'http://localhost:5000/'

// class LoginError extends Error {
//
// }

export const login = (username, password) => {
  return function(dispatch, getState) {
    console.log('login action state', getState())

    fetch(`${API}users?username=${username}&password=${password}`)
      .then(res => {
        if (res.ok) {
          console.log("response", res)
        } else {
          throw new Error("im an error")
        }
        return res.json()
      })
      .then(json => {
        console.log(json[0])
        dispatch({
          type: 'LOGIN',
          payload: json[0]
        })
      })
      .catch(err => {
        console.log("warning", err)
      })

    // You can do as many dispatches in here as you want.
    dispatch(test())
    dispatch(test())
    dispatch(test())

    return Promise.resolve();
  }
}

// All of your thunk actions will look like this.
// In fact, you'll copy paste this part of your code a lot.
  // export const myAction = (all, of, my, params) => {
  //   return (dispatch, state) => {
  //
  //   }
  // }
