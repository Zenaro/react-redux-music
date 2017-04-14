// ------------------------------------
// Constants
// ------------------------------------
// export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
// export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
// import request from 'ajax-request';
export const RANKLIST_INIT = 'RANKLIST_INIT';

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export function rankListInit(value) {
  return {
    type: RANKLIST_INIT,
    payload: value
  }
}

export const actions = {
  rankListInit
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

// 返回state的初始值: {rankList: []}
const defaultRankList = [
  [{
    title: 'ばんばんしー-in the autumn sky',
    id: 12
  }],
  [{
    title: 'ばんばんしー-in the autumn sky',
    id: 12
  }],
  [{
    title: 'ばんばんしー-in the autumn sky',
    id: 12
  }]
];
export default {
  rankListReducer: function(state = defaultRankList, action) {
    switch (action.type) {
      case RANKLIST_INIT:
        return state;
      default:
        return state;
    }
  }
}
// export default function reducer(state = initialState, action) {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }