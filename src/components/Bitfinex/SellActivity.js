import React from 'react';

const SellActivity = props => {
	if (!props.sell) {
			return (
				<p>Loading Buy Data...</p>
				);
		}


		if(props.sell.length === 0) {
			return (
				<div className="article-preview">
					No Buy data available.
				</div>
				);
		}


		return (
			<div className="sell-activity-container">
				<div className="sell-activity-container">
					<table className="sell-activity-table table">
				        <thead>
				          <tr>
				          <td>Price</td>
				          <td>Total</td>
				          <td>Amount</td>
				          <td>Count</td>
				        </tr>
				        </thead>

				        <tbody>

				         {props.sell[2] < 0  ? 
					        <tr>
					        	<td>{props.sell[0]}</td>
					        	<td>{Math.abs(Math.round((props.sell[2])*100) / 100)}</td>
					        	<td>{Math.abs(Math.round((props.sell[2])*100) / 100)}</td>
					        	<td>{props.sell[1]}</td>
					        </tr> :

					        null }

					    </tbody>
					</table>
				</div>
			</div>

		);


}


export default SellActivity;