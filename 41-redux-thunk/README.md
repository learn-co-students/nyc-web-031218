Redux Thunk
===========

## Outline

- Summary of Thunk
  - What problem it solves.
  - When do you need to use it.
  - Example usage.
- Q&A for confusing points.
- Breakout to try to thunk.

## Lecture Notes

What we have now with redux:
- Our action creators returned objects `{ type, payload }`.
- If we want to `dispatch` an action based on the result of an async call (ex: `fetch`), we can do the `dispatch` in `.then()`.
  - This is perfectly acceptable.

Another way to do this though is using Thunk.
- Thunk is a middleware.
- It lets our action creators **return** _functions_ **instead of** _objects_.
- When we dispatch these actions, as if they were normal redux actions, thunk will "intercept" the dispatch and instead:
  - call the returned function, and
  - pass `dispatch` and `state` as arguments into that function

By writing our actions in this manner, we get a couple of benefits:
- We can do our async calls and dispatches inside of our action.
- As a consequence, components that dispatch these actions look much cleaner.
- If we reuse these thunk actions in other components, we do not have to rewrite the async part of the call (ex: `fetch.then(dispatch())`).
  - This makes our code much more DRY.
- Since thunk calls the returned function, we also get the benefit of returning something from the dispatch.
  - This means we can return a Promise and chain our dispatch with `.then()`.

By no means is thunk the only/best way to handle this. It's just one design pattern of many that exist to make our code cleaner.

Alternatives:
- [redux-saga](https://github.com/redux-saga/redux-saga)
- [redux-loop](https://github.com/redux-loop/redux-loop)
- [redux-promise](https://github.com/redux-utilities/redux-promise)

**Usage**

```sh
# add to your project:
npm install --save redux-thunk
```

```javascript
// Import applyMiddleware and thunk:
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Before:
// const store = createStore(rootReducer);
// After:
const store = createStore(rootReducer, applyMiddleware(thunk));
```

Now your action creators can go from this:

```javascript
// Import action:
import { login } from '../actions/authActions'

// Action Creator
export function login(resp) {
  return {
    type: 'LOGIN',
    payload: resp
  }
}

// In every component that wants to do this same async call
// then dispatch:
handleSubmit = (event) => {
  event.preventDefault();
  const { username, password } = this.state;

  fetch("http://api.end.point/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    }
  )
  .then(res => res.json())
  .then(resp => {
    this.props.login(resp);
    // Or if you didn't add it to props via addDispatchToProps:
    // this.props.dispatch(login(resp));
  });
}

// Before connect():
const mapDispatchToProps = (dispatch) => {
  return {
    login: (resp) => {
      dispatch(login(resp))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
```

To this:

```javascript
// Action Creator
export function login(username, password) {
  // Note: state is an optional second argument
  // Redux will call this function for us and give it dispatch + state as arguments.
  return (dispatch) => {
    fetch("http://api.end.point/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      }
    )
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: 'LOGIN',
        payload: resp
      });
    });
  }
}

// In every component, we can now do this instead:
handleSubmit = (event) => {
  event.preventDefault();
  const { username, password } = this.state;

  this.props.login(username, password);
}

// Before connect():
const mapDispatchToProps = (dispatch) => {
  return {
    login: login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// Alternative shorthand:
// export default connect(mapStateToProps, { login: login })(Login);
```

Once you "get" thunk, you realize that all you actions start to look like this:

```javascript
export function doSomething(given, some, params) {
  return (dispatch) => {
    // fetch.then(() => dispatch)
  }
}
```

## Extras

Handling initial state when you are trying to populate on `componentDidMount()`.
- Be aware of this.
- Many ways to handle this.
  - 1 way from mod 4 projects: the loading gif animation shown via a conditional.
