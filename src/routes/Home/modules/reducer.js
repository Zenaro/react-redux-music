// ------------------------------------
// Constants
// ------------------------------------
import fetch from 'isomorphic-fetch';
const urlPrefix = 'http://localhost/NewWorld/sql-CloudMusic/FEBE-mysql-old/BackEnd/index.php/Home/';

// export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
// export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
// import request from 'ajax-request';
export const RANKLIST_INIT = 'RANKLIST_INIT';

export const REQUEST_POSTS = 'REQUEST_POSTS';

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}
// ------------------------------------
// Actions
// ------------------------------------
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function receivePosts(subreddit, json) {
  console.log(json);
  return {
    type: RECEIVE_POSTS,
    payload: json,
    subreddit,
    posts: json.map(child => child.data),
    receivedAt: Date.now()
  }
}
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const rankListInit = (subreddit) => {
  return (dispatch, getState) => {
    dispatch(requestPosts(subreddit));

    return fetch(urlPrefix + 'Music/getAllList')
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(subreddit, json))
      )
      // return new Promise((resolve) => {
      //   setTimeout(() => {
      //     dispatch({
      //       type: COUNTER_DOUBLE_ASYNC,
      //       payload: getState().counter
      //     });
      //     resolve()
      //   }, 200)
      // })
  }
}

// export const actions = {
//   rankListInit: rankListInit
// }

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

// 数组对象无法实时render的问题
export default {
  rankListReducer: function(state = defaultRankList, action) {
    switch (action.type) {
      case RECEIVE_POSTS:
        console.log(action.payload);
        console.log('gg');
        return Object.assign([], state, action.payload);
      default:
        return state;
    }
  }
}
// export default function reducer(state = initialState, action) {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }