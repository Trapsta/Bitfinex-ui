import React from 'react';
import BuyActivity from './BuyActivity';
import SellActivity from './SellActivity';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	orderBook: state.orderBook
});


class OrderBook extends React.Component {

	



	render() {
		return (
			<div className="book-container">
				<h3>Order Book (BTC-USD) </h3> 
				<div className="book-table-container">
					<div className="half-book-container buy-activity">
						<BuyActivity buy={this.props.orderBook} />
					</div>
					<div className="half-book-container sell-activity">
						<SellActivity sell={ this.props.orderBook} />
					</div>
				</div>

				
			</div>
		);
	}
}


export default connect(mapStateToProps, () => ({}) ) (OrderBook);