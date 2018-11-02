import { createStore } from 'redux';

const defaultState = {
	appName: 'BitFinex UI',
	connected: true,
	trades: null,
	ticker: null,
	orderBook: null
};


const reducer = function(state = defaultState, action) {
	switch (action.type) {
		case 'TICKER_LOADED':
			//console.log(action.payload);
			return {...state, ticker: action.payload}
		case 'TRADES_LOADED':
			return {...state, trades: action.payload}
		case 'BOOK_LOADED':
			return {...state, orderBook: action.payload}
		case 'SERVER_TOGGLE':
			return {...state, connected: !state.connected}
		default:
			return state;
	}
};


const store = createStore(reducer);

export default store;