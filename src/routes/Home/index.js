import Home from './components/Home'

// Sync route definition
export default {
	component: Home,
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			/*  Webpack - use require callback to define
			    dependencies for bundling   */
			const Counter = require('./containers/CounterContainer').default
			const reducer = require('./modules/counter').default

			/*  Add the reducer to the store on key 'counter'  */
			injectReducer(store, {
				key: 'counter',
				reducer
			})

			/*  Return getComponent   */
			cb(null, Counter)

			/* Webpack named bundle   */
		}, 'counter')
	}
}