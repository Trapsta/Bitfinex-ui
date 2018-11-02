import React from 'react';
import Ticker from './Ticker';
import OrderBook from './OrderBook';
import Trades from './Trades';

class Bitfinex extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-3">
					<Ticker />
				</div>

				<div className="col-md-5">
					<OrderBook />
				</div>

				<div className="col-md-3">
					<Trades />
				</div>

			</div>
		)
	}
}


export default Bitfinex;