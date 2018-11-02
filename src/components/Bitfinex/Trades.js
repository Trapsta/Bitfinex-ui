import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	trades: state.trades
});


class Trades extends React.Component {
	render() {

		if (!this.props.trades) {
			return (
				<p>Loading Trades...</p>
				);
		}


		if(this.props.trades.length === 0) {
			return (
				<div className="article-preview">
					No Trades data available.
				</div>
				);
		}


		return (
			<div className="trades-container">
				<h3>Trades</h3>
				<div className="trades-table-container">
					<table className="trades-table table">
				        <thead>
				          <tr>
				            <td>Time</td>
				            <td>Price</td>
				            <td>Amount</td>
				          </tr>
				        </thead>
				        <tbody>
					        <tr>
					        	<td>{new Date(this.props.trades[1]).toLocaleTimeString("en-US")}</td>
					            <td>{this.props.trades[3]}</td>
					            <td>{this.props.trades[2]}</td>
					        </tr>
					    </tbody>
					</table>
				</div>
			</div>

		);
	}
}


export default connect(mapStateToProps, () => ({}) ) (Trades);