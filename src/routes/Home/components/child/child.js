import React, {
	Component
} from 'react';
export default class Child extends Component {
	componentDidMount() {
		const {
			store
		} = this.context;
		console.log(store);
	}
	render() {
		return (
			<div>child -test</div>
		);
	}
}