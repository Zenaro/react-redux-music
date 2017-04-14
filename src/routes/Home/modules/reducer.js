// ------------------------------------
// Constants
// ------------------------------------

const urlPrefix = 'http://localhost/NewWorld/sql-CloudMusic/FEBE-mysql-old/BackEnd/index.php/Home/';

// export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
// export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
// import request from 'ajax-request';
export const RANKLIST_ADD = 'RANKLIST_ADD';
export const RANKLIST_INIT = 'RANKLIST_INIT';

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */
export function rankListAdd() {
  return {
    type: RANKLIST_ADD,
    payload: 1
  }
}

export function rankListInit(value) {
  // return {
  //   type: RANKLIST_INIT,
  //   payload: value
  // }
  return {
    type: RANKLIST_INIT,
    ajax: true,
    ajaxParam: {
      url: urlPrefix + 'Music/getAllList',
      type: 'get',
      dataType: 'json'
    },
    callBack(v, dispatch) {
      // 回调
      console.log(v);
      dispatch({
        type: RANKLIST_INIT,
        payload: v
      });
    },
    failCallBack(v, dispatch) {

    }
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
  /*[{
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
  }]*/
];

// 数组对象无法实时render的问题
export default {
  rankListReducer: function(state = defaultRankList, action) {
    switch (action.type) {
      case RANKLIST_INIT:
        console.log('init')
        let test = state[0];
        return state;
      case RANKLIST_ADD:
        return state + 1;
      default:
        return 1;
    }
  }
}
// export default function reducer(state = initialState, action) {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }