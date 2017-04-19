import {
	connect
} from 'react-redux'
import {
	addPlayList
} from '../modules/reducer'

import Player from '../components/Player'

function mapDispatchToProps(dispatch) {
	return {
		addPlayList: (array) => dispatch(addPlayList(array))
	}
};

const mapStateToProps = (state) => ({
	audio: state.audio
});

export default connect(mapStateToProps, mapDispatchToProps)(Player)