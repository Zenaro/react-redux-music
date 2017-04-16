import fetch from 'isomorphic-fetch';
const urlPrefix = 'http://localhost/NewWorld/sql-CloudMusic/FEBE-mysql-old/BackEnd/index.php/Home/';

// ------------------------------------
// 流行榜 - 新歌榜 - 原创榜 歌单的加载Actions
// ------------------------------------
export const RANKLIST_INIT = 'RANKLIST_INIT';

export const REQUEST_RANKLIST = 'REQUEST_RANKLIST'; /// 请求
export const RECEIVE_RANKLIST = 'RECEIVE_RANKLIST'; // 接收

function reqRankList(subreddit) {
  return {
    type: REQUEST_RANKLIST,
    subreddit
  }
}

function recRankList(subreddit, json) {
  return {
    type: RECEIVE_RANKLIST,
    payload: json,
    subreddit,
    posts: json.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const rankListInit = (subreddit) => {
  return (dispatch, getState) => {
    dispatch(reqRankList(subreddit));

    return fetch(urlPrefix + 'Music/getAllList') // ajax
      .then(response => response.json())
      .then(json =>
        dispatch(recRankList(subreddit, json))
      );
  }
}

let defaultList = [
  [],
  [],
  []
];
export default {
  rankListReducer: function(state = defaultList, action) {
    switch (action.type) {
      case RECEIVE_RANKLIST:
        return Object.assign([], state, action.payload); // 数组对象无法实时render的问题
      default:
        return state;
    }
  }
}