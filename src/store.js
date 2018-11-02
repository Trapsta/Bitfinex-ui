import { createStore } from 'redux';

const defaultState = {
	appName: 'BitFinex UI',
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
			return{...state, trades: action.payload}
		case 'BOOK_LOADED':
			return{...state, orderBook: action.payload}
		default:
			return state;
	}
};


const store = createStore(reducer);

export default store;