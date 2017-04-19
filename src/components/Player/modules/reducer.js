import fetch from 'isomorphic-fetch';
const urlPrefix = 'http://localhost/NewWorld/sql-CloudMusic/FEBE-mysql-old/BackEnd/index.php/Home/';

export default {
  reducer: function(state = 0, action) {
    switch (action.type) {
      case 'increase':
        return state + 1; // 数组对象无法实时render的问题
      default:
        return state;
    }
  }
}