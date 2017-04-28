import fetch from 'isomorphic-fetch';
import config from '../../../config';
const {
  urlPrefix
} = config;

// ------------------------------------
// 流行榜 - 新歌榜 - 原创榜 歌单的加载Actions
// ------------------------------------
export const RANKLIST_INIT = 'RANKLIST_INIT'; // 初始化排行榜
export const REQUEST_RANKLIST = 'REQUEST_RANKLIST'; // 请求
export const RECEIVE_RANKLIST = 'RECEIVE_RANKLIST'; // 接收

export const PLAYLIST_ADD = 'PLAYLIST_ADD'; // 添加数组到播放列表
function requestRankList(subreddit) {
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
    dispatch(requestRankList(subreddit));

    return fetch(urlPrefix + 'Music/getAllList') // ajax
      .then(response => response.json())
      .then(json =>
        dispatch(recRankList(subreddit, json))
      );
  }
}

export const addPlayList = (json = {}) => {
  return {
    type: PLAYLIST_ADD,
    payload: json
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
        /*case PLAYLIST_ADD:
          console.log(state);
          let newState = Object.assign({}, state);
          console.log(newState);
          let [array, item, id] = [action.payload, {}, 0];
          for (let i = 0, length = array.length; i < length; i++) {
            item = array[i];
            id = item['music_id'];
            if (!state.playListMap[id]) {
              state.playListMap[id] = item[i];
              state.playList.push(item);
            }
          }
          console.log(state.playList)
          return Object.assign({}, state, state);*/
      default:
        return state;
    }
  }
}