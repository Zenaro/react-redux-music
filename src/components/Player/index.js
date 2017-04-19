/*import Player from './components/Player';

export default Player;*/
// import Player from './components/Player'
/*import {
	injectReducer
} from '../../store/reducers'
// Sync route definition
export default (store) => ({
	path: '',
	// component: Home,
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			// Webpack - use require callback to define dependencies for bundling
			const container = require('./containers/container').default;
			const counterReducer = require('./modules/reducer').default.reducer;
			// const rankListReducer = require('./modules/reducer').default.rankListReducer;

			// Add the reducer to the store on key 'counter'  

			// Add the reducer to the store on key 'musicList'  
			injectReducer(store, {
				key: 'test',
				reducer: rankListReducer
			});

			// Return getComponent
			cb(null, container);

			// Webpack named bundle   
		}, 'test')
	}
});*/

import Player from './containers/container';

export default Player;