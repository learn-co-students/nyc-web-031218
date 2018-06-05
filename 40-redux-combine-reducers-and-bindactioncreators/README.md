Redux - Combine Reducers & BindActionCreators
=============================================

## Outline

- Lectures in Mod 5
- Combine Reducers
- BindActionCreators

## Lecture Notes

### Combine Reducers

As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.

This is where Combine Reducers comes into play.

Note:
- Like Redux, Combine Reducers is just more opinions on how you should organize/write your Redux code.
- You don't have to use it. You can even implement your own version that handle other use cases (Combine Reducers isn't for everyone).

Example use cases of Combine Reducers:
- Separating out your domain-specific data into "slices". Each reducer handles a different "slice" and by doing so, your state tree becomes easier to understand and manage.
- Single action triggering changes in different parts of your state tree.
  - RESET action to reset the state of the entire app.
  - SYNC, BACKUP, etc.

### BindActionCreators

Again, like all things Redux, you don't have to use this.

**Purpose:** Use components in a Redux aware component in a way such that those children components can remain Redux unaware.
- BindActionCreators is a helper function that allows you to wrap you actionCreators such that they dispatch when called.
- This makes it so you can pass down the actionCreator and the component using that function won't need Redux. Instead, dispatch is bound to it and will be called.
























## SWBAT

- Determine if they need to use combineReducers in their Redux app
- Split up state to be handled by multiple reducers and combine them with combineReducers.
- Use BindActionCreators in Redux aware components so that children components can remain Redux unaware.
