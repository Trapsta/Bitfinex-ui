import React from 'react';
import getData from '../../utils/server';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
	ticker: state.ticker
});

const mapDispatchToProps = dispatch => ({
	onLoad: (payload) =>
		dispatch({ type: 'TICKER_LOADED', payload })
});


class Ticker extends React.Component {

	componentWillMount() {
		this.props.onLoad(getData());
	}


	render() {

		if (!this.props.ticker) {
			return (
				<p>Loading Ticker...</p>
				);
		}


		if(this.props.ticker.length === 0) {
			return (
				<div className="article-preview">
					No Ticker data available.
				</div>
				);
		}


		return (
			<div className="ticker-container">
				<h3>Ticker</h3>
				<div className="ticker-table-container">
					<table className="ticker-table table">
				        <thead>
				          <tr>
				            <td>Name</td>
				            <td>Last</td>
				            <td>24hr</td>
				            <td>VOL (USD)</td>
				          </tr>
				        </thead>
				        <tbody>

					            <tr>
					              <td>BTC</td>
					              <td> $ {this.props.ticker[0]}</td>
					              <td>{Math.round((this.props.ticker[5]*100)*100) / 100}%</td>
					              <td>{(this.props.ticker[7])*(this.props.ticker[0])}</td>
					            </tr>

				   

				      
				        </tbody>
				      </table>
				</div>
			</div>
		);
	}
}


export default connect(mapStateToProps, mapDispatchToProps ) (Ticker);