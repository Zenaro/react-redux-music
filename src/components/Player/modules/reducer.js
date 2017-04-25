import fetch from 'isomorphic-fetch';
import config from '../../../config';
const {
	urlPrefix
} = config;

export const PLAYER_RELOAD = 'PLAYER_RELOAD';

export const PLAYLIST_ADD = 'PLAYLIST_ADD';

export const addPlayList = (json = {}) => {
	return {
		type: PLAYLIST_ADD,
		payload: json
	}
}

const defaultState = {
	playListMap: {},
	playList: [],
	title: '12',
	singer: '34'
}
export default {
	reducer: function(state = defaultState, action) {
		switch (action.type) {
			case PLAYLIST_ADD:
				let [array, item, id] = [action.payload, {}, 0];
				for (let i = 0, length = array.length; i < length; i++) {
					item = array[i];
					id = item['music_id'];
					if (!state.playListMap[id]) {
						state.playListMap[id] = item[i];
						state.playList.push(item);
					}
				}
				console.log(state)
				return Object.assign({}, state, state);
			default:
				return state;
		}
	}
}