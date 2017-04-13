// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
export const MUSICLIST_PUSH = 'MUSICLIST_PUSH';
export const MUSICLIST_POP = 'MUSICLIST_POP';

// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export function musicListPush(value) {
  return {
    type: MUSICLIST_PUSH,
    payload: value
  }
}

export function musicListPop() {
  return {
    type: MUSICLIST_POP,
    payload
  }
}

export const actions = {
  increment,
  musicListPush,
  musicListPop
}

// ------------------------------------
// Action Handlers
// ------------------------------------
// const ACTION_HANDLERS = {
//   [COUNTER_INCREMENT]: (state, action) => state + action.payload,
//   [COUNTER_DOUBLE_ASYNC]: (state, action) => state * 2
// };

// ------------------------------------
// Reducer
// ------------------------------------

// 返回state的初始值: {counter: 0, musicList: []}
export default {
  counterReducer: function(state = 0, action) {
    const counter = state.counter;
    switch (action.type) {
      case COUNTER_INCREMENT:
        return state + action.payload;
      case COUNTER_DOUBLE_ASYNC:
        return state * 2;
      default:
        return 0;
    }
    // const handler = ACTION_HANDLERS[action.type];
    // return handler ? handler(state, action) : state
  },
  homeDataReducer: function(state = [], action) {
    switch (action.type) {
      case 'PUSH':
        return state.push();
      default:
        return state;
    }
  }
}
// export default function reducer(state = initialState, action) {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }