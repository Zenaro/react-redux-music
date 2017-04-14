import Home from './components/Home'
import {
	injectReducer
} from '../../store/reducers'
// Sync route definition
export default (store) => ({
	path: '',
	// component: Home,
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			/*  Webpack - use require callback to define
			    dependencies for bundling   */
			const container = require('./containers/container').default;
			// const counterReducer = require('./modules/reducer').default.counterReducer;
			const rankListReducer = require('./modules/reducer').default.rankListReducer;

			/*  Add the reducer to the store on key 'counter'  */
			// injectReducer(store, {
			// 	key: 'counter',
			// 	reducer: counterReducer
			// });

			/*  Add the reducer to the store on key 'musicList'  */
			injectReducer(store, {
				key: 'rankList',
				reducer: rankListReducer
			})

			/*  Return getComponent   */
			cb(null, container);

			/* Webpack named bundle   */
		}, 'rankList')
	}
});